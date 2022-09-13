import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
    Image, View, Text,ImageBackground
} from 'react-native';

////////////////app components////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

/////////////////app pakages////////////////
import { TextInput,Snackbar } from 'react-native-paper';

/////////////////////app styles/////////////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';

/////////////api/////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPassword = ({ navigation }) => {
 //textfields
 const [Email, setEmail] = useState('');

//button states
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);
const [visible, setVisible] = useState(false);
const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
const onDismissSnackBar = () => setVisible(false);

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

//Api Calling
 const ForgetUserPassword=async() => {
  var email=Email
  await AsyncStorage.setItem('forgetEmail',Email);
   console.log('email:',email)
 axios({
   method: 'post',
   url: BASE_URL+'forgetPassword/email-send-doctor',
   data:{  
       email : Email,    
   },
 })
 .then(function (response) {
   console.log("response", JSON.stringify(response.data))

   if(response.data.statusText==='Success')
   {
    setloading(0);
    setdisable(0);
    navigation.navigate('EmailVerification',response.data)
   }
   else
    {
      setloading(0);
      setdisable(0);
      alert(response.data.message)
     }
 })
 .catch(function (error) {
   console.log("error", error)
 })
}
//Api form validation
const formValidation = async () => {
 // input validation
 if (Email == '') {
   setsnackbarValue({value: "Please Enter Email", color: 'red'});
   setVisible('true');
 }
    
 else if (!handleValidEmail(Email)) {
   console.log('a')
   setsnackbarValue({value: "Incorrect Email", color: 'red'});
   setVisible('true');
}
 else{
   setloading(1);
   setdisable(1);
   ForgetUserPassword()
 }
}

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <ImageBackground source={require('../../../assets/AuthPic/authpic.png')}
      resizeMode="cover" style={styles.container}>
        <View style={Authstyles.imageview}>
                <Image
                 source={require('../../../assets/Logo/logo.png')}
                    style={Authstyles.image}
                    resizeMode='stretch'
                />
                 <Text style={Authstyles.imagetext}>Doctor</Text>
            </View>
<View style={Authstyles.maintextview}>
            <Text style={Authstyles.toptext}>Forget Password</Text>
            <Text style={Authstyles.subtext}>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam
            </Text>
          </View>
     
      <View style={styles.inputview}>
          <View style={styles.inputflex}>
      <TextInput
            label={'Email'}
            onChangeText={setEmail}
            autoFocus={true}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            keyboardType='email-address'
            autoCapitalize={'none'}
            placeholderTextColor={'black'}
          />
     </View>
        </View> 
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Send Code'}
              widthset={'70%'}
              loading={loading}
              disabled={disable}
              onPress={() => formValidation()}
            /></View>
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
    </ImageBackground>

  )
};

export default ForgetPassword;