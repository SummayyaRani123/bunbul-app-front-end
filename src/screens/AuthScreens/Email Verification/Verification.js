import React, { useEffect, useState } from 'react';
import {
    Image, View, Text, SafeAreaView,ScrollView,TouchableOpacity,
} from 'react-native';
///////////////app images//////////////
import { appImages } from '../../../constant/images';

/////////////////app components/////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

//////////////app icons/////////////
import Feath from 'react-native-vector-icons/Feather';

/////////////////////app styles/////////////////////
import AuthTextstyles from '../../../utills/AuthSameStyles/AuthTextstyles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

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

    <SafeAreaView style={styles.container}>
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
                              source={appImages.forgettop}
                  style={styles.image}
                  resizeMode='cover'
              />
          </View>

            </View>

<View style={AuthTextstyles.maintextview}>
          <Text style={AuthTextstyles.toptext}>Verification</Text>
          <Text style={AuthTextstyles.subtext}>Enter code that we have sent on 
you email
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
            //onPress={() => verifyno()}
            onPress={()=>     navigation.navigate('NewPassword')}
          /></View>

</SafeAreaView>

  )
};

export default Verification;