import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white'
  },
  toptext:
  {
    color: '#313131',
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(3),
  },
  lasttext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_SemiBold,
    fontSize: hp(1.6),
  },

  usertext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(2.2),
  },

  underuserviewtext:
  {
    color:Colors.Appthemecolor,
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.7),
    marginTop:hp(2)
  },
  savingtext:
  {
    color: '#313131',
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.8),
  },
  usertext:
  {
    color: '#707070',
  fontFamily:fontFamily.Poppins_Medium,
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
 height:hp(45),
    width: wp('90%'),
    alignSelf: 'center',
    alignItems:'center',
    shadowColor: '#000',
    borderRadius:wp(5),
    backgroundColor:'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 5,
marginTop:hp(1.6)
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
      title: {
        fontSize: hp(2.5),
    fontFamily:fontFamily.Poppins_Medium,
        marginBottom: hp(0),
        color: 'black',
    },
    details: {
        fontSize: hp(1.6),
    fontFamily:fontFamily.Poppins_Regular,
        color: 'black',
        width:wp(60)
    },
});
export default styles;
