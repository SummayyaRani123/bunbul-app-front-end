import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

import { fontFamily } from '../../constant/fonts';
const styles = StyleSheet.create({
    bottomtext:
    {
        color:'black',
        textAlign:'center',
         fontFamily:"Poppins",
         fontSize:hp(3),
      },
      Subscriptiontext:
      {
          fontSize:hp(1.6),
          color:'white',
          fontFamily: fontFamily.Poppins_SemiBold,
 
      },
      maintext:{
          fontSize:hp(3),
  
          color:Colors.Appthemecolor,
          fontFamily:fontFamily.Poppins_Medium,
          fontFamily: "Montserrat Bold",
        },
        subtext:{
          fontSize:hp(2),
  width:wp(50),
  textAlign:'center',
          color:Colors.greytext,
          fontFamily:fontFamily.Poppins_Regular,
          fontFamily: "Montserrat Bold",
        },
        modaltextview:
  {
    flexDirection:'row',
    justifyContent:'center',
    alignContent:"center",
    alignItems:"center",
    borderColor:Colors.Appthemecolor,
        borderWidth:1,
       // margin:8,
        width:wp(50),
        height:hp(5),
        borderRadius:wp(10),
        backgroundColor:Colors.Appthemecolor
  },
  borderview:
  {
      borderBottomColor:'rgba(112,112,112,0.2)',
      borderBottomWidth:2,
      width:wp(90),
      alignSelf:'center',
      marginTop:hp(0),
      marginBottom:hp(1),
      marginLeft:wp(5)
    },
    animatedIcon:{
      width: wp(35),
      // position: 'absolute',
      // top: -36,
      marginBottom:hp(0),
      
  }
  });
  export default styles;
  