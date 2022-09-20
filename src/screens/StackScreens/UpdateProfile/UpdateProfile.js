import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,Image,
 View, Text, TouchableOpacity
} from 'react-native';

////////////////app components/////////////
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';
import CustomButtonhere from '../../../components/Button/CustomButton';

/////////////////////app pakages///////////////
import { TextInput, Avatar} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app styles////////////////
import styles from './styles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

import { appImages } from '../../../constant/images';

const UpdateProfile = ({ navigation }) => {

      //password field
      const { passwordVisibility, rightIcon, handlePasswordVisibility } =
      TogglePasswordVisibility();

                //camera state and funnction
                const refRBSheet = useRef();

                ///////////picker state/////////
                const[image,setImage]=useState()
                
                 //////////////////////cameraimage//////////////////
                 const takePhotoFromCamera = () => {
                
                ImagePicker.openCamera({
                  compressImageMaxWidth: 300,
                  compressImageMaxHeight: 300,
                  cropping: true,
                  compressImageQuality: 0.7
                }).then(image => {
                  refRBSheet.current.close()
                  console.log(image);
                  setImage(image.path);
        
                });
                }
                ////////////////////library image//////////////////
                const choosePhotoFromLibrary = () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 300,
                  cropping: true,
                  compressImageQuality: 0.7
                }).then(image => {
                  refRBSheet.current.close()
                  console.log(image);
                  setImage(image.path);
                });
                }
                /////////////////image api calling///////////////
                const pic =()=>{
                console.log("data yhn hai:")
                RNFetchBlob.fetch('POST',
                BASE_URL + 'upload-image',
                {
                  Authorization: "Bearer access-token",
                  otherHeader: "foo",
                  'Content-Type': 'multipart/form-data',
                }, [
                // part file from storage
                {
                  name: 'image', filename: 'avatar-foo.jpg', type: 'image/jpg',
                  data: RNFetchBlob.wrap(image)
                }
                // elements without property `filename` will be sent as plain text
                ]).then((resp) => {
                // ...
                console.log('Imagehere',resp.data)
                Updateuser(resp.data)
                }).catch((err) => {
                alert(err)
                })
                
                }
////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);

//////////////////////Api Calling/////////////////
const Updateuser=async(props) => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
axios({
 method: 'PUT',
 url: BASE_URL+'doctor/update-doctor',
 data:{ 
  _id:user,
   username:Username,
   startTime: OpeningTime,
 endTime: ClosingTime,
 location:Location,
 doctorFee: TotalFee,
 image:props,
 description:desc
 },
})
.then(function (response) {
 console.log("response", JSON.stringify(response.data))
 setloading(0);
 setdisable(0);
alert('data updated')
GetProfileData()
})
.catch(function (error) {
 console.log("error", error)
})
}

    /////////TextInput References///////////
    const ref_input2 = useRef();
    const ref_input3 = useRef();

 //textfields
 const [Username, setUsername] = useState('');
 const [Password, setPassword] = useState('');
const [Email, setEmail] = useState('');



 ///////get api for onboarding data//////////
 const GetProfileData= async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
  axios({
    method: 'GET',
    url:BASE_URL+"doctor/get-doctor?_id="+user
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
 /////////////setuserprofile data//////////
 setusername(response.data.username)
 setPassword(response.data.password)
 setEmail(response.data.email)
 settotalfee(response.data.doctorFee)
 setopeningtime(response.data.startTime)
 setclosingtime(response.data.endTime)
 setlocation(response.data.location)
 setImage(BASE_URL+JSON.parse(response.data.image))
 setDesc(response.data.description)
  })
  .catch(function (error) {
    console.log("error", error)
  })
  }
    useEffect(() => {
      //GetProfileData()
  },[]);
    ////////////////datetime picker states////////////////
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [showyearwise, setshowyearwise] = useState(false);
    const [showdaywise, setshowdaywise] = useState('');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      var d = new Date();
      d = selectedDate
      // console.log(d)
      //console.log(selectedDate)
      if (d != undefined) {
        let year = d.getFullYear();
        let month = (d.getMonth() + 1).toString().padStart(2, "0");
        let day = d.getDate().toString().padStart(2, "0");
        console.log(year + '-' + month + '-' + day);
        console.log(typeof (year + '-' + month + '-' + day))
        setshowyearwise(year + "-" + month + "-" + day)
        setshowdaywise(day + "-" + month + "-" + year)
        //console('date',showyearwise)
      }
    
    }
  
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
      console.log('mode',mode)
    };
    
    const showDatepicker = () => {
      showMode('date');
    };
  return (

    <SafeAreaView style={styles.container}>
                {show && (
<DateTimePicker
testID="dateTimePicker"
value={date}
mode={mode}
display="default"
locale="es-ES"
themeVariant="light"
onChange={onChange}
style={{
shadowColor: '#fff',
shadowRadius: 0,
shadowOpacity: 1,
shadowOffset: { height: 0, width: 0 },
color:'#1669F',
textColor:'#1669F'
}}
/>
)}
            <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
              <View style={{marginBottom:hp(3)}}>
      <CustomHeader
        screentitle={'Update Profile'}
        navigation={() => navigation.goBack()}
      /> 
      </View>

      <View style={{
    alignItems: 'center',justifyContent:'center',
    marginTop:hp(3)
      }}>
        
        <TouchableOpacity onPress={()=> refRBSheet.current.open()}
      style={{
 alignItems: 'flex-end',
 justifyContent:'flex-end'
      }}
      >
        <Avatar.Image
          source={{uri: image}}
          style={{backgroundColor:'white',borderColor:'grey',borderWidth:0.7}}
          size={120}
        />
             <Image
          source={appImages.cameraicon}
          style={{position:'absolute',height:hp(10),width:wp(12),top:55}}
        resizeMode={'contain'}
        />
  {/* <View style={{backgroundColor:'white'}}>

  </View>
          <Ionicons
          name='camera'
          color={Colors.Appthemecolor}
          size={25}
          onPress={() => refRBSheet.current.open()}
          style={{position:'absolute'}}
        /> */}
      </TouchableOpacity>
   
      </View>
      <View style={AuthInputstyles.inputview}>
    <TextInput
          label={'Name'}
          returnKeyType = {"next"}
          onSubmitEditing={() => { ref_input2.current.focus()}}
          blurOnSubmit={false}
          autoFocus = {true}
          onChangeText={setUsername}
          style={AuthInputstyles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={Colors.greytext}
          placeholder={'Enter your Name'}
        />
   <TouchableOpacity  onPress={showDatepicker}>
    <TextInput
          label={'Date of birth'}
          onChangeText={onChange}
          value={showdaywise}
          editable={false}
          style={AuthInputstyles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
          right={<TextInput.Icon name={'calendar-range'} color={Colors.greyicons} 
          onPress={showDatepicker}
 />}
        />
   </TouchableOpacity>
    <TextInput
      ref={ref_input2}
          label={'Email'}
          onChangeText={setEmail}
          returnKeyType = {"next"}
          onSubmitEditing={() => { ref_input3.current.focus()}}
          blurOnSubmit={false}
          style={AuthInputstyles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          keyboardType='email-address'
        autoCapitalize='none'
          placeholderTextColor={'black'}
        />
           <TouchableOpacity
   style={styles.inputflex}
   onPress={()=> navigation.navigate('UpdatePassword')}>
    <TextInput
    label={'Change Password'}
    editable={false}
     onChangeText={setPassword}
     style={AuthInputstyles.inputeditable}
     underlineColor={Colors.appgreycolor}
     activeUnderlineColor={Colors.appgreycolor}
     secureTextEntry={passwordVisibility}
     enablesReturnKeyAutomatically
     right={<TextInput.Icon name={'chevron-right'} color={Colors.greyicons} 
     onPress={()=>navigation.navigate('UpdatePassword')}   />}
     placeholderTextColor={'black'}
   />
   </TouchableOpacity>

      </View>

  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Update'}
              widthset={'60%'}
              loading={loading}
              disabled={disable}
              onPress={() => pic()}
            /></View>
                 <CamerBottomSheet
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'Gallery'}
              takePhotoFromCamera={takePhotoFromCamera}
              choosePhotoFromLibrary={choosePhotoFromLibrary}
            />
   
   </ScrollView>
    </SafeAreaView>
  )
};

export default UpdateProfile;