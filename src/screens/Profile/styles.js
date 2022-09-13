import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white'
  },

  balancetext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('3%'),
  },


  usertext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
  },

  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
  },

  inputview:
  {
 
    width: wp('90%'),
    alignSelf: 'center',
    alignContent:"center",
    //backgroundColor: "red",
  },
  inputflex:
  {
    justifyContent:'center',
          //backgroundColor:'green'
          },
  inputeditable:{
    //marginTop:13,
    backgroundColor:'white',
    width: wp('84%'),
    marginLeft:'3%',
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'black',
},

  buttonview:
  { 
marginTop:hp(10),
      justifyContent: 'center',
      marginBottom:hp(5)
      //backgroundColor:'yellow'
      },
});
export default styles;
