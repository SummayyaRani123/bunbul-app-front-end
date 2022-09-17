import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
card:
{
  margin:wp('2%'),
  borderRadius:wp(4),
 width: wp(93),
  alignSelf:'center',
  backgroundColor:Colors.cardcolor,
  paddingHorizontal:wp(5),
  paddingVertical:hp(2),
},
balancetext:
{
  color: 'black',
  fontWeight: '600',
  fontSize: hp('3%'),
},

  });
  export default styles;
  