import React from 'react';
import {
  StyleSheet,
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
  image: {
    height:hp(25),
    width:wp(65),
  },
  buttonview:
  { 
      justifyContent: 'center',
marginTop:hp(30)
      },
});
export default styles;
