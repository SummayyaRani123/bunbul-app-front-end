import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////////app components//////////////
import LottieModal from '../../../components/LottieModal/LottieModal';
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

//////////////////app pakages////////////
import { TextInput,Snackbar } from 'react-native-paper';

/////////////appp styles///////////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';

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

    <ImageBackground source={require('../../../assets/AuthPic/authpic.png')}
      resizeMode="cover" style={styles.container}>
             <StatusBar backgroundColor={'white'} barStyle="dark-content"/>
        <View style={Authstyles.imageview}>
                <Image
                 source={require('../../../assets/Logo/logo.png')}
                    style={Authstyles.image}
                    resizeMode='stretch'
                />
                 <Text style={Authstyles.imagetext}>Doctor</Text>
            </View>
<View style={Authstyles.maintextview}>
            <Text style={Authstyles.toptext}>Welcome  Back</Text>
            <Text style={Authstyles.subtext}>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam
            </Text>
          </View>
     
      <View style={styles.inputview}>
          <View style={styles.inputflex}>
      <TextInput
            label={'Email'}
            onChangeText={setEmail}
            returnKeyType = {"next"}
            onSubmitEditing={() => { ref_input2.current.focus()}}
            blurOnSubmit={false}
            autoFocus = {true}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor={'black'}
          />
     </View>
     <View style={styles.inputflex}>
      <TextInput
        ref={ref_input2}
            label={'Password'}
            onChangeText={setPassword}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
           secureTextEntry={passwordVisibility}
           enablesReturnKeyAutomatically
           right={<TextInput.Icon name={rightIcon} color={Colors.Appthemecolor} 
           onPress={handlePasswordVisibility}   />}
            placeholderTextColor={'black'}
          />
     </View>

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
              title={'LOGIN'}
              widthset={'70%'}
              loading={loading}
              disabled={disable}
              onPress={() => setModalVisible(true)}
            /></View>
                      <View style={Authstyles.lasttextview}>
        <Text style={Authstyles.lasttext}>Don't have an account? </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
        <Text style={Authstyles.lasttext1}>Sign Up</Text>
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
    </ImageBackground>

  )
};

export default Login;