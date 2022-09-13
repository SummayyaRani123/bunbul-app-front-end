import React, { useEffect, useState,useRef } from 'react';
import {
  Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////////app components//////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

/////////////////app pakages////////////////
import { TextInput,Snackbar } from 'react-native-paper';

//////////////app icons///////////////
import Feath from 'react-native-vector-icons/Feather';

////////////app styles//////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';

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
          <Text style={Authstyles.toptext}>Welcome </Text>
          <Text style={Authstyles.subtext}>Sign up to get started
           and experience
great shopping deals
          </Text>
        </View>
   
    <View style={styles.inputview}>
    <View style={styles.inputflex}>
    <TextInput
          label={'UserName'}
          returnKeyType = {"next"}
          onSubmitEditing={() => { ref_input2.current.focus()}}
          blurOnSubmit={false}
          autoFocus = {true}
          onChangeText={setUsername}
          style={styles.inputeditable}
          underlineColor={Colors.appgreycolor}
          activeUnderlineColor={Colors.appgreycolor}
          placeholderTextColor={'black'}
        />
   </View>
   <View style={styles.inputflex}>
    <TextInput
      ref={ref_input2}
          label={'Email'}
          onChangeText={setEmail}
          returnKeyType = {"next"}
          onSubmitEditing={() => { ref_input3.current.focus()}}
          blurOnSubmit={false}
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
         ref={ref_input3}
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
      </View>

  

<View style={styles.buttonview}>
          <CustomButtonhere
            title={'Sign Up'}
            widthset={'70%'}
            loading={loading}
            disabled={disable}
            onPress={() => formValidation()}
          />
   
          </View>
          <View style={Authstyles.lasttextview}>
        <Text style={Authstyles.lasttext}>Already have an account.</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Text style={Authstyles.lasttext1}>Sign In</Text>
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
  </ImageBackground>

  )
};

export default Signup;