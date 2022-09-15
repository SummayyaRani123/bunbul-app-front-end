import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,ScrollView,
    Image, View, Text,ImageBackground
} from 'react-native';
/////////////////app images////////////
import { appImages } from '../../../constant/images';

////////////////app components////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

/////////////////app pakages////////////////
import { TextInput,Snackbar } from 'react-native-paper';

/////////////////////app styles/////////////////////
import AuthTextstyles from '../../../utills/AuthSameStyles/AuthTextstyles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

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
    <SafeAreaView style={styles.container}>
            <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:hp(5),width:wp(5),marginLeft:wp(8),marginTop:hp(4)}}>
                <Image
                 source={appImages.backicon}
                    style={{height:hp(2.5),width:wp(6)}}
                    resizeMode='contain'
                />
            </View>
      <View style={styles.imageview}>
              <Image
                              source={appImages.forgettop}
                  style={styles.image}
                  resizeMode='cover'
              />
          </View>

            </View>
<View style={AuthTextstyles.maintextview}>
            <Text style={AuthTextstyles.toptext}>Forget Password</Text>
            <Text style={AuthTextstyles.subtext}>Enter email to get a verification code
            </Text>
          </View>
     
      <View style={AuthInputstyles.inputview}>
      <TextInput
            label={'Email'}
            onChangeText={setEmail}
            autoFocus={true}
            style={AuthInputstyles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            keyboardType='email-address'
            autoCapitalize={'none'}
            placeholderTextColor={Colors.greytext}
            placeholder={'Enter your Email'}
          />

        </View> 
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Send Code'}
              widthset={'80%'}
              loading={loading}
              disabled={disable}
              //onPress={() => formValidation()}
              onPress={() =>     navigation.navigate('Verification')}
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
        </ScrollView> 
</SafeAreaView>

  )
};

export default ForgetPassword;