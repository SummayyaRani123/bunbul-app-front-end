import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,
    Image, View, Text, TouchableOpacity,
} from 'react-native';

/////////////////app images////////////
import { appImages } from '../../../constant/images';

////////////////app components//////////////
import LottieModal from '../../../components/LottieModal/LottieModal';
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

//////////////////app pakages////////////
import { TextInput,Snackbar } from 'react-native-paper';

////////////app styles//////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import AuthLastTextstyles from '../../../utills/AuthSameStyles/AuthLastText';
import AuthTextstyles from '../../../utills/AuthSameStyles/AuthTextstyles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

///////////redux//////////
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../../../redux/actions';

const Login = ({ navigation }) => {

      //Modal States
      const [modalVisible, setModalVisible] = useState(false);

  /////////TextInput References///////////
  const ref_input2 = useRef();


  ///////////////data states////////////////////
  const [Password, setPassword] = React.useState('');
  const [Email,  setEmail] = React.useState('');
  
   ///////////////button states/////////////
   const [loading, setloading] = useState(0);
   const [disable, setdisable] = useState(0);
   const [visible, setVisible] = useState(false);
   const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
   const onDismissSnackBar = () => setVisible(false);
   

  ////////////////password field///////////////
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();

 ///////////email//////////////////
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

//////////////Api Calling////////////////////
const LoginUser=async() => {
  console.log('here')
  axios({
    method: 'put',
    url: BASE_URL+'doctor/login',
    data:{
        
        email : Email,
        password: Password,
       
        
    },
  })
  .then(async function (response) {
    console.log("response", JSON.stringify(response.data))
    console.log("response", JSON.stringify(response.data.paymentStatus))
   
    setloading(0);
    setdisable(0);
    if(response.data.paymentStatus === "pending" )
    {
      alert('Submit Payment First then use the App')
      navigation.navigate('Subscribe',response.data)
    }
    
       else
          {
            await AsyncStorage.setItem('Userid',response.data._id);
            await AsyncStorage.setItem('Userdata',response.data.username);
            await AsyncStorage.setItem('UserEmail',response.data.email);
            await AsyncStorage.setItem('UserPass',response.data.password);
            await AsyncStorage.setItem('SubscriptionType',response.data.subscriptionType);
            navigation.navigate('BottomTab')
    
          }
        
     
 
  })
  .catch(function (error) {
    setloading(0);
    setdisable(0);
    if(error)
  {     alert('Email or Password is incorrect')}

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
  else if (Password=='') {
    setsnackbarValue({value: "Please Enter Password", color: 'red'});
    setVisible('true');

    }

  else{
    setloading(1);
    setdisable(1);
    LoginUser()
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
        <View style={Authstyles.imageview}>
                <Image
                 source={appImages.signintop}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>

<View style={AuthTextstyles.maintextview}>
            <Text style={AuthTextstyles.toptext}>Sign In</Text>
            <Text style={AuthTextstyles.subtext}>Welcome back
            </Text>
          </View>
     
      <View style={AuthInputstyles.inputview}>
      <TextInput
            label={'Email'}
            onChangeText={setEmail}
           // returnKeyType = {"next"}
           // onSubmitEditing={() => { ref_input2.current.focus()}}
            //blurOnSubmit={false}
           // autoFocus = {true}
            style={AuthInputstyles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor={Colors.greytext}
            placeholder={'Enter your Email'}
          />

      <TextInput
       // ref={ref_input2}
            label={'Password'}
            onChangeText={setPassword}
            style={AuthInputstyles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
           secureTextEntry={passwordVisibility}
           enablesReturnKeyAutomatically
           right={<TextInput.Icon name={rightIcon} color={Colors.greyicons} 
           onPress={handlePasswordVisibility}   />}
           placeholderTextColor={Colors.greytext}
           placeholder={'Enter Password'}
          />


            <View style={styles.forgettextview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}
          >
              <Text style={styles.forgettext}>
                Forget Password?
              </Text>
              </TouchableOpacity>
            </View>
     
        </View> 
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Sign In'}
              widthset={'80%'}
              loading={loading}
              disabled={disable}
              onPress={() => navigation.navigate('BottomTab')}
            /></View>
                      <View style={AuthLastTextstyles.lasttextview}>
        <Text style={AuthLastTextstyles.lasttext}>Don't have an account? </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
        <Text style={AuthLastTextstyles.lasttext1}>Sign Up</Text>
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
        <LottieModal
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
              text={'Password Updated'}
          buttontext={'Go to Login'}
 onPress={()=> {setModalVisible(false)}}
                />
                </ScrollView> 
</SafeAreaView>

  )
};

export default Login;