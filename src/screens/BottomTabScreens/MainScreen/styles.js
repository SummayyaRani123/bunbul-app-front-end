import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

///////////////fontfamily///////////////
import { fontFamily } from '../../../constant/fonts';


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:'white'
  },

  timespamtext:
  {
    color: Colors.Appthemecolor,
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(2.1),
  },
  dateformattext:
  {
    color: Colors.greytext,
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.7),
  },



});
export default styles;
