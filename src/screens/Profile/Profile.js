import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,
 View, Text, TouchableOpacity
} from 'react-native';

////////////////app components/////////////
import CamerBottomSheet from '../../components/CameraBottomSheet/CameraBottomSheet';
import { TogglePasswordVisibility } from '../../utills/TogglePasswordVisibility';
import CustomButtonhere from '../../components/Button/CustomButton';

/////////////////////app pakages///////////////
import { TextInput, Avatar} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app styles////////////////
import styles from './styles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

const Profile = ({ navigation }) => {

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

///////////////textfields//////////////////
const [Username, setusername] = useState('');
const [Password, setPassword] = useState('');
const [Email,  setEmail] = useState('');
const [TotalFee, settotalfee] = useState('');
const [OpeningTime, setopeningtime] = useState('');
const [ClosingTime, setclosingtime] = useState('');
const [Location, setlocation] = useState('');
const[desc,setDesc]=useState('')



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
      GetProfileData()
  },[]);
  return (

    <SafeAreaView style={styles.container}>
            <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
      <View style={{
       marginTop: hp(2), 
        justifyContent:'center',
        marginHorizontal: hp(5),
        alignItems:'center'
      }}>
        <Text style={styles.balancetext}>Profile</Text>
      </View>
      <View style={{
    alignItems: 'center',justifyContent:'center',
    marginTop:hp(3)
      }}>
        
        <TouchableOpacity onPress={()=> refRBSheet.current.open()}
      style={{
 alignItems: 'center',justifyContent:'center'
      }}
      >
        <Avatar.Image
          source={{uri: image}}
          style={{backgroundColor:'white',borderColor:'grey',borderWidth:0.7}}
          size={120}
        />
  
          <Ionicons
          name='camera'
          color={Colors.Appthemecolor}
          size={25}
          onPress={() => refRBSheet.current.open()}
          style={{position:'absolute'}}
        />
      </TouchableOpacity>
   
      </View>
      <View style={styles.inputview}>
    <View style={styles.inputflex}>
    <TextInput
          label={'UserName'}
          value={Username}
          onChangeText={setusername}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   <View style={styles.inputflex}>
    <TextInput
          label={'Email'}
          value={Email}
          onChangeText={setEmail}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          keyboardType='email-address'
          editable={false}
          placeholderTextColor={'black'}
        />
   </View>

   <View style={styles.inputflex}>
    <TextInput
          label={'Total Fee'}
          value={TotalFee}
          onChangeText={settotalfee}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>

   <View style={styles.inputflex}>
    <TextInput
          label={'Opening Time'}
          value={OpeningTime}
          onChangeText={setopeningtime}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   <View style={styles.inputflex}>
    <TextInput
          label={'Closing Time'}
          value={ClosingTime}
          onChangeText={setclosingtime}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   <View style={styles.inputflex}>
    <TextInput
          label={'Location'}
          value={Location}
          onChangeText={setlocation}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   <TouchableOpacity
   style={styles.inputflex}
   onPress={()=> navigation.navigate('UpdatePassword')}>
   <View style={styles.inputflex}>
    <TextInput
          label={'Change Password'}
          editable={false}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   </TouchableOpacity>
   {/* <View style={styles.inputflex}>
    <TextInput
          label={'Bio'}
          onChangeText={setDesc}
          multiline={true}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
         secureTextEntry
          placeholderTextColor={'black'}
        />
   </View> */}
      </View>
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Update'}
              widthset={'70%'}
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

export default Profile;