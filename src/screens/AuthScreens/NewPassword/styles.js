import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:"white"
    },
    image: {
      height:hp(25),
      width:wp(65),
    },
  

  buttonview:
  { 
      justifyContent: 'center',
   marginTop:hp(25)
      },
});
export default styles;
