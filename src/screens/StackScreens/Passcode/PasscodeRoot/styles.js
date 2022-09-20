import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white'
  },
maincontainer:
{
  flexDirection:"row",
  justifyContent:'space-between',
  marginTop:hp(2),
  width:wp(76)
      },
  optiontext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.5),
  },
  borderview:
  {
      borderBottomColor:'rgba(112,112,112,0.2)',
      borderBottomWidth:2,
      width:wp(78),
      marginTop:hp(1.8),
      marginBottom:hp(2)
    },
  inputview:
  {
 height:hp(21),
    width: wp('90%'),
    alignSelf: 'center',
    alignItems:'center',
    shadowColor: '#000',
    borderRadius:wp(5),
    backgroundColor:'white',
    padding:wp(5),
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowOffset:0.1,
    shadowRadius: 2,
    elevatioTop:1,
    elevation: 7,
marginTop:hp(5)
    //backgroundColor: "red",
  },

});
export default styles;
