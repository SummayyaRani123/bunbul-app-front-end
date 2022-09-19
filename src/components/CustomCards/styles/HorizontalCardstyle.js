import React from 'react';
import {StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const HorizontalCardstyles = StyleSheet.create({

/////////////////////horizonta card design////////////////////
  cardContainer: {
    width: wp(94),
    height: hp(33),
     justifyContent:'center',
    borderBottomLeftRadius:wp(6),
    borderBottomRightRadius:wp(6),
    borderRadius:wp(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    //shadowRadius: 5,
    elevation: 5,
 
  },
  imageStyle: {
    height: hp(27),
    width: wp(94),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius:wp(6),
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize:hp(1.8),
    fontWeight: '800',
    width:wp(50),
    color:'black'
  },
  categoryStyle: {
    fontSize:hp(1.8),
    fontWeight: '200',
    width:wp(50),
    color:'black'
  },
  infoStyle: {
    width:wp(30),
    marginLeft:wp(4),
    marginVertical: 5,
  },


});
export default HorizontalCardstyles