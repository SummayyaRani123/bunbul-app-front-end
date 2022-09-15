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
  image: {
    height:hp(20),
    width:wp(80),
  },
  imageview:
  { 
//justifyContent: 'flex-end',
// alignItems:"flex-end",
// alignSelf:'flex-end'
//backgroundColor:"red"
},
  buttonview:
  { 
      justifyContent: 'center',
      alignSelf:'center',
      marginTop:hp(15)
      },
});
export default styles;
