import React, { useEffect, useState } from 'react';
import {
    Image, View, Text, ImageBackground
} from 'react-native';

/////////////////app components/////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

//////////////app icons/////////////
import Feath from 'react-native-vector-icons/Feather';

/////////////app styles/////////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';

///////////////app code fields/////////////
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';


const Verification = ({ navigation,route }) => {
  console.log("obj:",route.params)
   //code Confirmation states
 const [value, setValue] = useState();
//cell number
  const CELL_COUNT = 4;

    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);

 //check OTP Code
 const verifyno =()=>{
  console.log("obj:",route.params.otp  ,value )
  if(route.params.otp == value)
  {
    navigation.navigate('NewPassword',value)
  }
  else{
    alert('Wrong Code, Enter the right Code')
    console.log("not click")
  }
}

//code set in state
  const getcode=()=>{
    console.log("obj:",route.params)
    //setValue(route.params)
  }

  useEffect(() => {

    getcode()
  
  },[]);
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
          <Text style={Authstyles.toptext}>Verify Code</Text>
          <Text style={Authstyles.subtext}>Lorem ipsum dolor sit amet, 
          consetetur sadipscing elitr, sed diam
          </Text>
        </View>
   
        <View style={styles.Cellview}>
<CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        //style={styles.input}
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
<View style={styles.buttonview}>
          <CustomButtonhere
            title={'Send Code'}
            widthset={'70%'}
            onPress={() => verifyno()}
          /></View>
  </ImageBackground>

  )
};

export default Verification;