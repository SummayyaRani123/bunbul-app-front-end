import React from 'react';
import {
  StyleSheet,

} from 'react-native';
import Colors from '../../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,

    backgroundColor:"white"
  },

  inputview:
  {

    width: wp('90%'),
    height:wp('100%'),
    alignSelf: 'center',
    alignContent:"center",
    //backgroundColor: "red",
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
    marginTop:hp(20),
      justifyContent: 'center',
      //backgroundColor:'yellow'
      },
});
export default styles;
