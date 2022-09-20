import React, { useEffect, useState,useRef } from 'react';
import {
  Image, View, Text, TouchableOpacity,SafeAreaView,ScrollView
} from 'react-native';

//////////////app images///////////
import { appImages } from '../../../constant/images';

////////////////app components//////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

/////////////////app pakages////////////////
import { TextInput,Snackbar } from 'react-native-paper';

//////////////app icons///////////////
import Feath from 'react-native-vector-icons/Feather';

///////////////////app pakages date time picker/////////////
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';

////////////app styles//////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import AuthLastTextstyles from '../../../utills/AuthSameStyles/AuthLastText';
import AuthTextstyles from '../../../utills/AuthSameStyles/AuthTextstyles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

////////////////////app api//////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';

const Signup = ({ navigation }) => {

    /////////TextInput References///////////
    const ref_input2 = useRef();
    const ref_input3 = useRef();

 //textfields
 const [Username, setUsername] = useState('');
 const [Password, setPassword] = useState('');
const [Email, setEmail] = useState('');

 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);
 const [visible, setVisible] = useState(false); 
 const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
 const onDismissSnackBar = () => setVisible(false);



//password field
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();

//email
const handleValidEmail = (val) => {
 let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
 if (reg.test(val)) {
     console.log('true')
     return true;
 }
 else {
     console.log('falsse')
     return false;
 }
}


//Api form validation
const formValidation = async () => {
 // input validation
 if (Username == '') {
   setsnackbarValue({value: "Please Enter Username", color: 'red'});
   setVisible('true');
 }
 else if (Email=='') {
   setsnackbarValue({value: "Please Enter Email", color: 'red'});
   setVisible('true');
   }
   else if (!handleValidEmail(Email)) {
     console.log('a')
     setsnackbarValue({value: "Incorrect Email", color: 'red'});
     setVisible('true');
 }
else if (Password=='') {
 console.log("lastNmae")
 setsnackbarValue({value: "Please Enter Password", color: 'red'});
 setVisible('true');
 }
 else{
   navigation.navigate('SignupDetails',{Username,Password,Email})
 }
}

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
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
                  <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
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
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <View style={{height:hp(5),width:wp(5),marginLeft:wp(8),marginTop:hp(4)}}>
                <Image
                 source={appImages.backicon}
                    style={{height:hp(2.5),width:wp(6)}}
                    resizeMode='contain'
                />
            </View>
             </TouchableOpacity>

      <View style={styles.imageview}>
              <Image
                              source={appImages.signuptop}
                  style={styles.image}
                  resizeMode='cover'
              />
          </View>

            </View>
<View style={AuthTextstyles.maintextview}>
          <Text style={AuthTextstyles.toptext}>Sign Up</Text>
          <Text style={AuthTextstyles.subtext}>Create an account
          </Text>
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
    <TextInput
         ref={ref_input3}
          label={'Password'}
          onChangeText={setPassword}
          style={AuthInputstyles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          secureTextEntry={passwordVisibility}
          enablesReturnKeyAutomatically
          right={<TextInput.Icon name={rightIcon} color={Colors.greyicons} 
          onPress={handlePasswordVisibility}   />}
          placeholderTextColor={'black'}
        />
      </View>

  

<View style={styles.buttonview}>
          <CustomButtonhere
            title={'Sign Up'}
            widthset={'80%'}
            loading={loading}
            disabled={disable}
            //onPress={() => formValidation()}
            onPress={() => navigation.navigate('Login')}
          />
   
          </View>
          <View style={AuthLastTextstyles.lasttextview}>
        <Text style={AuthLastTextstyles.lasttext}>Already have an account.</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Text style={AuthLastTextstyles.lasttext1}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{
            backgroundColor: snackbarValue.color,
            marginBottom:'20%',
            zIndex: 999,
          }}>
          {snackbarValue.value}
        </Snackbar>
      </ScrollView>
</SafeAreaView>

  )
};

export default Signup;