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

const AuthTextstyles = StyleSheet.create({
  maintextview:
  {
marginHorizontal:wp(8),
marginTop:hp(8)
  },
  maintext:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3.2%'),
    fontFamily: 'Raleway',
    justifyContent: 'center',
  },

  subtext:
  {
    color:Colors.greytext,
    fontSize: hp(1.8),
    width:wp(65),
    fontFamily:fontFamily.Poppins_Regular
  },
  toptext:
  {
    color: Colors.Appthemecolor,
    fontSize: hp(3),
    marginTop: wp(5),
    fontFamily:fontFamily.Poppins_Medium
  },

});
export default AuthTextstyles;
