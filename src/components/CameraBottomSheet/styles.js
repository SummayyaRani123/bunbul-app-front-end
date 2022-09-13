import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
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
          fontSize:hp(2),
          color:'white',
          fontFamily: "Montserrat Bold",
          fontWeight:'bold',
      },
      maintext:{
          fontSize:hp(2.5),
          fontWeight:'bold',
          color:'grey',
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
        margin:8,
        width:wp(70),
        borderRadius:wp(10),
        backgroundColor:Colors.Appthemecolor
  },
  });
  export default styles;
  