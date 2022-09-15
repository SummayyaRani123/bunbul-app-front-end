import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';



const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:'white'
  },

  timespamtext:
  {
    color: Colors.Appthemecolor,
    fontWeight: '600',
    fontSize: hp(2.5),
  },
  dateformattext:
  {
    color: Colors.greytext,
    fontWeight: 'bold',
    fontSize: hp(2),
  },



});
export default styles;
