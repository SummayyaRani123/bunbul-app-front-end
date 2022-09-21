import React, { useEffect, useState,useRef} from 'react';
import {
  SafeAreaView, 
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

/////////////app components//////////////////
import LottieModal from '../../../components/LottieModal/LottieModal';
import CustomModal from '../../../components/Modal/CustomModal';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

////////////////app pakages//////////////
import { TextInput,Snackbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

//////////////app styles////////////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdatePassword = ({ navigation,route }) => {
  console.log('code here:', route.params)
     //Modal States
     const [modalVisible, setModalVisible] = useState(false);

  //password field
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  TogglePasswordVisibility();
  
    /////////TextInput References///////////
    const ref_input2 = useRef();
    const ref_input3 = useRef();

  //textfields
  const [CurrPassword, setCurrPassword] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Code] = useState(route.params);
   //button states
   const [loading, setloading] = useState(0);
   const [disable, setdisable] = useState(0);
   const [visible, setVisible] = useState(false);
   const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
   const onDismissSnackBar = () => setVisible(false);
  
  //Api Calling
  const UserUpdatePassword=async() => {
    var useremail = await AsyncStorage.getItem('UserEmail');
    console.log("email",useremail,Password,Code)
  axios({
    method: 'PUT',
    url: BASE_URL+'doctor/update-password',
    data:{
        email : useremail,
        password: Password, 
        // code:Code,
    },
  })
  .then(async function (response) {
    console.log("response",response.data)
    setloading(0);
    setdisable(0);
    await AsyncStorage.removeItem('forgetEmail');
    setModalVisible(true)
   
  })
  .catch(function (error) {
    console.log("error", error)
  })
  }
  //Api form validation
  const formValidation = async () => {
  // input validation
  if (Password=='') {
    setsnackbarValue({value: "Please Enter Password", color: 'red'});
    setVisible('true');
  
    }
  else if (ConfirmPassword=='') {
    setsnackbarValue({value: "Please Enter Confirm Password", color: 'red'});
    setVisible('true');
  
    }
    else if (Password!=ConfirmPassword) {
        setsnackbarValue({value: "Please Enter Same Password", color: 'red'});
        setVisible('true');
    
        }
  else{
    setloading(1);
    setdisable(1);
    UserUpdatePassword()
  }
  }
  const email=async()=>{
    var useremail = await AsyncStorage.getItem('forgetEmail');
    console.log("email",useremail)
  }
  useEffect(() => {
    console.log('API>>....',BASE_URL)
    email()
    //SplashScreen.hide();
  }, []);
  return (

    < SafeAreaView
      style={styles.container}>
      <View style={{marginBottom:hp(10)}}>
      <CustomHeader
        screentitle={'Update Password'}
        navigation={() => navigation.goBack()}
      /> 
      </View>


      <View style={styles.inputview}>

          <TextInput
            label={'Current Password'}
            onChangeText={setCurrPassword}
            returnKeyType = {"next"}
            onSubmitEditing={() => { ref_input2.current.focus()}}
            blurOnSubmit={false}
            autoFocus = {true}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            right={<TextInput.Icon name={rightIcon} color={Colors.greyicons} 
            onPress={handlePasswordVisibility}   />}
            placeholderTextColor={Colors.placeholdertextgrey}
            placeholder={'Current Password'}
          />

  
          <TextInput
            ref={ref_input2}
            label={'Password'}
            onChangeText={setPassword}
            returnKeyType = {"next"}
            onSubmitEditing={() => { ref_input3.current.focus()}}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            right={<TextInput.Icon name={rightIcon} color={Colors.greyicons} 
            onPress={handlePasswordVisibility}   />}
            placeholderTextColor={Colors.placeholdertextgrey}
            placeholder={'New Password'}
          />
  
      <TextInput
        ref={ref_input3}
            label={'Confirm Password'}
            onChangeText={setConfirmPassword}
            style={styles.inputeditable}
            underlineColor={Colors.appgreycolor}
            activeUnderlineColor={Colors.appgreycolor}
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            right={<TextInput.Icon name={rightIcon} color={Colors.greyicons} 
            onPress={handlePasswordVisibility}   />}
            placeholderTextColor={Colors.placeholdertextgrey}
            placeholder={'Confirm New Password'}
          />

        </View> 
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Update'}
              widthset={'60%'}
              //onPress={() => formValidation()}
              onPress={() => {setModalVisible(true), setTimeout(() => {
                setModalVisible(false) // Stack Name
              }, 3000)}}
            /></View>
                  <View>

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
                Icon={  <AntDesign
                  name="checkcircle"
                  color={Colors.Appthemecolor}
                  size={100}
              />}
              text={'Password Updated'}
          buttontext={'Go to Login'}
 onPress={()=> {navigation.navigate('Login'),setModalVisible(false)}}
                /> 
    </SafeAreaView>

  )
};

export default UpdatePassword;