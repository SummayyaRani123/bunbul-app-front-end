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
    height:hp(25),
    width:wp(100),
  },


forgettextview:
{
  justifyContent: 'flex-end',
  alignSelf: 'flex-end',
  marginTop: wp('2%'),
  marginRight:wp(4),
  marginTop:hp(1)

},
forgettext:
{
  color: Colors.Appthemecolor,
  fontFamily:fontFamily.Poppins_Medium,
  fontSize: hp(1.5),
  marginBottom: wp('3%'),
},
  buttonview:
  { 
      justifyContent: 'center',
      alignSelf:'center',
      marginTop:hp(19)
      },
});
export default styles;
