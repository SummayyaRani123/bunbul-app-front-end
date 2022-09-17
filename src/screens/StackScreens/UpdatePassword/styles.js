import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
    backgroundColor:"white"
  },

  inputview:
  {
    flex: 0.5,
    width: wp('90%'),
    height:wp('100%'),
    alignSelf: 'center',
    alignContent:"center",
    //backgroundColor: "red",
  },
  inputflex:
  {
   // flex:0.2,
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
forgettextview:
{
  justifyContent: 'flex-end',
  alignSelf: 'flex-end',
  marginTop: wp('2%'),
  marginRight: '8%',
  marginTop: '5%'

},
forgettext:
{
  color: Colors.Appthemecolor,
  fontWeight: '300',
  fontSize: hp('1.8%'),
  marginBottom: wp('3%'),
},
  buttonview:
  { 
      flex: 0.2, 
      justifyContent: 'center',
      //backgroundColor:'yellow'
      },
});
export default styles;
