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
backgroundColor:"white"
  },
  image: {
    height:hp(25),
    width:wp(65),
  },

  buttonview:
  { 

      justifyContent: 'center',
marginTop:hp(25)
      },
      Cellview:{
        //flexDirection:'row',
        //justifyContent: 'space-evenly' ,
        marginBottom:10,
        marginTop:10,
        paddingHorizontal:wp(15)
      },
      root: {
        //flex: 1, 
        padding: 0
      },
      title: {
        textAlign: 'center', 
      fontSize:hp('3%'),
      justifyContent:'center',
      alignItems:'center',
      color:'black'
      },
      codeFieldRoot: 
      {
      marginTop: 10,
      
      },
      cell: {
      //paddingVertical:0,
      //paddingBottom:2,
      marginTop:10,
      width: wp(10),
      height: hp('5.5%'),
      lineHeight: hp('5%'),
      fontSize:hp('3%'),
      color:'black',
   borderBottomWidth:2,
      borderColor: Colors.border,
      textAlign: 'center',
      alignItems:'center',
      backgroundColor: 'white',
      justifyContent:'center',  
      alignItems:'center',
      alignSelf:'center',
      paddingHorizontal:wp(5)
      },
      focusCell: {
      borderColor: 'gray',
      alignItems:'center',
      textAlign: 'center',
      //margin:10,
      justifyContent:'center',
      },
      Cellmaintext:
      {
        color:Colors.Appthemecolor,
      textAlign:'center',
fontFamily:fontFamily.Poppins_Medium,
fontSize:hp(1.8)
      },
});
export default styles;
