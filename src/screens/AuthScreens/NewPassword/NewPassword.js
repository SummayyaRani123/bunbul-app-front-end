import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView, ScrollView,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////app images////////////////
import { appImages } from '../../../constant/images';

////////////////app components//////////////
import CustomModal from '../../../components/Modal/CustomModal';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';
import CustomButtonhere from '../../../components/Button/CustomButton';

/////////////////app icons////////////
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feath from 'react-native-vector-icons/Feather';

//////////////////app pakages/////////////////
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

const NewPassword = ({ navigation,route }) => {

    /////////TextInput References///////////
    const ref_input2 = useRef();

console.log('code here:', route.params)
      //Modal States
      const [modalVisible, setModalVisible] = useState(false);
      
    //password field
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();

 //textfields
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
  var useremail = await AsyncStorage.getItem('forgetEmail');
  console.log("email",useremail)
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
  console.log("response", JSON.stringify(response.data))
  //if(response.data === '')
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
                              source={appImages.signuptop}
                  style={styles.image}
                  resizeMode='cover'
              />
          </View>
            </View>
<View style={AuthTextstyles.maintextview}>
            <Text style={AuthTextstyles.toptext}>Reset Password</Text>
            <Text style={AuthTextstyles.subtext}>Create a strong password
            </Text>
          </View>
     
      <View style={AuthInputstyles.inputview}>
          <TextInput
            label={'Password'}
            onChangeText={setPassword}
            returnKeyType = {"next"}
            onSubmitEditing={() => { ref_input2.current.focus()}}
            blurOnSubmit={false}
            autoFocus = {true}
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

      <TextInput
            ref={ref_input2}
            label={'Confirm Password'}
            onChangeText={setConfirmPassword}
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
     </View>
  <View style={styles.buttonview}>
            <CustomButtonhere
              title={'Reset'}
              widthset={'80%'}
              loading={loading}
              disabled={disable}
              onPress={() => formValidation()}
            /></View>
        <View>
        <CustomModal 
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

export default NewPassword;