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
          color:'black',
          fontFamily: fontFamily.Poppins_Medium,
 
      },
      maintext:{
          fontSize:hp(2.5),
          fontWeight:'bold',
          color:'#313131',
          fontFamily:fontFamily.Poppins_Medium,
          fontFamily: "Montserrat Bold",
        },
        modaltextview:
  {
    flexDirection:'row',
    justifyContent:'center',
    alignContent:"center",
    alignItems:"center",
    //borderColor:Colors.Appthemecolor,
        //borderWidth:1,
       // margin:8,
        width:wp(70),
        //borderRadius:wp(10),
        //backgroundColor:Colors.Appthemecolor
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
  });
  export default styles;
  