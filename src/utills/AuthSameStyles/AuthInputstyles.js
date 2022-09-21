import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  import { fontFamily } from '../../constant/fonts';

const AuthInputstyles = StyleSheet.create({

    inputview:
    {
      width: wp(90),
      alignSelf: 'center',
      alignContent:"center",
      justifyContent:'center',
      marginTop:hp(3)
      //backgroundColor: "red",
    },
    inputeditable:{
      //marginTop:13,
      backgroundColor:'white',
      width: wp('84%'),
      marginLeft:'3%',
      fontSize:hp(1.8),
      fontFamily:fontFamily.Poppins_Medium,
      color:'#797979',
  },

});
export default AuthInputstyles;
