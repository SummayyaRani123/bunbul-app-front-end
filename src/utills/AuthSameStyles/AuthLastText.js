import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  import { fontFamily } from '../../constant/fonts';

const AuthLastTextstyles = StyleSheet.create({
  lasttextview:
  { 
    flexDirection: 'row',
     alignContent:'center',
    justifyContent:'center',
  alignSelf:'center',
  marginTop:hp(2)
   // backgroundColor:'red' 
  },
  lasttext:
  {
    color: Colors.greytext,
fontFamily:fontFamily.Poppins_Regular,
    fontSize: hp(1.8),
  },
  lasttext1:
  {
    color: Colors.Appthemecolor,
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.8),
  },

});
export default AuthLastTextstyles;
