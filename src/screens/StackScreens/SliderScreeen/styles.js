import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../../constant/fonts';


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:'white'
  },

 maintext:
  {
    color: '#343434',
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(3),
    marginLeft:wp(3)
  },
  subtext:
  {
 width:wp(94),
    color: 'black',
    fontFamily:fontFamily.Poppins_Regular,
    fontSize: hp(1.8),
    textAlign:'justify'
  },
  buttonview:
  { 
      justifyContent: 'center',
      alignSelf:'center',
      marginTop:hp(3),
      marginBottom:hp(5)
      },


});
export default styles;
