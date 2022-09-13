import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center'
  },

  inputview:
  {
    width: wp('90%'),
    height:wp('100%'),
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

      justifyContent: 'center',
      //backgroundColor:'yellow'
      },
      Cellview:{
        //flexDirection:'row',
        //justifyContent: 'space-evenly' ,
        marginBottom:10,
        marginTop:10,
        marginHorizontal:wp('18%')
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
      marginTop: 10
      },
      cell: {
      //paddingVertical:0,
      //paddingBottom:2,
      marginTop:10,
      width: wp('15%'),
      height: hp('5.5%'),
      lineHeight: hp('5%'),
      fontSize:hp('3%'),
      color:'black',
   borderBottomWidth:2,
      borderColor: Colors.border,
      textAlign: 'center',
      //margin:2,
      borderRadius:12,
      alignItems:'center',
      backgroundColor: 'white',
      justifyContent:'center',  
      alignItems:'center',
      alignSelf:'center'
      },
      focusCell: {
      borderColor: 'gray',
      alignItems:'center',
      textAlign: 'center',
      //margin:10,
      justifyContent:'center',
      },
      Cellmaintext:
      {color:Colors.activeinputs,
      textAlign:'center',
      alignSelf:'center',
      width: wp('50%'),
      fontWeight:'400'
      },
});
export default styles;
