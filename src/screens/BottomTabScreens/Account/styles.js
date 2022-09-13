import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white'
  },

  balancetext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('3%'),
  },


  usertext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
  },

  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
  },

});
export default styles;
