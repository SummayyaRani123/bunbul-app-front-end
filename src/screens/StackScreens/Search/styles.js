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
    justifyContent: 'flex-start',
   // alignContent: 'center',
    backgroundColor:'white'
  },

  balancetext:
  {
    color: '#707070',
    fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.8),
  },

  input: {
    //position:'absolute',
    marginLeft:wp(5),
width:wp(68),
color:"black",
//backgroundColor:'#00000008'
  },
  inputView:{
 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    //borderWidth: 2,
    borderRadius:30,
    height:wp('12%'),
    width:wp(85),
    marginBottom:hp(2),
    //borderColor:'gray',
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    
  },
  Icon:
  {
      color:'#707070',
      marginLeft:wp(2),
      marginRight:wp(10)

  },
  borderview:
  {
      borderBottomColor:'rgba(112,112,112,0.2)',
      borderBottomWidth:2,
      width:wp(85),
      alignSelf:'center',
      marginTop:hp(1.8),
      marginBottom:hp(2)
    },
  card:
  {
     borderColor:'black',
    //borderWidth: 1,
    marginTop:wp('2%'),
    marginBottom:wp('2%'),
    borderRadius:10,
   alignContent:"center",
   alignItems:'center',
   width: wp('50%'),
    alignSelf:'center',
    //backgroundColor:"red"
    //justifyContent:'space-between',
    //marginHorizontal:wp('5%')
  },

  itemimageView:
  {
      height:wp('30%'),
      width:wp('45%'),
      //margin:wp('3%'),
      borderRadius:15
  
  },
  
  card1:
  {

    marginTop:wp('2%'),
    marginBottom:wp('2%'),
    borderRadius:10,
   width: wp('100%'),
  },


  useritemtext:
  {
    color: 'black',
    fontWeight: '400',
    fontSize: hp('2%'),
    //textAlign:'center'
  },
  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
    //marginLeft:wp('4%')
    //textAlign:'center'
  },
  itemtext1:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
    marginLeft:wp('4%')
    //textAlign:'center'
  },

  cardtext:
  {
    color:'black', 
    marginBottom:20,marginTop:20,
     fontFamily:'Poppins',fontSize:18,
     textAlign:'center'

  },


});
export default styles;
