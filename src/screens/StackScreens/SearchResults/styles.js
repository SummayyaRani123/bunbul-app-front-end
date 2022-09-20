import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

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
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  balanceprice:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  input: {
    position:'absolute',
    marginLeft:40,
width:'80%',
//backgroundColor:'yellow'
  },
  inputView:{
      flex:0.07,
    flexDirection:'row',
    justifyConten:'space-around',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    borderWidth: 2,
    borderRadius:50,
    height: 40,
    width:wp('95%'),
    marginBottom:10,
    borderColor:'gray',
   //backgroundColor:'red'
  },
  Icon:
  {
      color:Colors.Appthemecolor,
      marginLeft:10

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

  itemimageView1:
  {
      height:wp('30%'),
      width:wp('32%'),
      //margin:wp('3%'),
      borderRadius:15
  
  },
  useritemtext:
  {
    color: 'black',
    fontWeight: '600',
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
