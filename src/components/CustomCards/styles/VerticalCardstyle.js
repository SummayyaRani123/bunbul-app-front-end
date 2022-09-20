import React from 'react';
import {StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

  
  ////////////////////vertical card styles/////////////////
 const VerticalCardstyles = StyleSheet.create({

     cardContainer: {
      width: wp(44),
      height: hp(40),
      justifyContent:'center',
          borderBottomLeftRadius:wp(6),
      borderBottomRightRadius:wp(6),
      backgroundColor:'grey',
      borderRadius:wp(10),
      //shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.75,
      //shadowRadius: 5,
      elevation: 5,
    },
     imageStyle: {
      height: hp(25),
      width: wp(44),
      borderTopLeftRadius: wp(6),
      borderTopRightRadius:wp(6),
      alignContent: 'center',
      alignSelf: 'center',
    },
    titleStyle: {
        fontSize:hp(1.8),
        fontWeight: '800',
        width:wp(28),
        color:'white'
      },
      categoryStyle: {
        fontSize:hp(1.8),
        fontWeight: '200',
        width:wp(30),
        color:'white'
      },
      infoStyle: {
        width:wp(30),
        marginLeft:wp(2),
        marginVertical: hp(1),
      },
  });
  export default VerticalCardstyles