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
    backgroundColor:'white'
  },

  balancetext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('3%'),
  },
  balanceprice:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },

  card:
  {
    // borderColor:'white',
    // borderWidth: 1,
    margin:wp('2%'),
    borderRadius:10,
    flexDirection:'row',
   alignContent:"center",
   alignItems:'center',
   width: wp('90%'),
    alignSelf:'center',
    justifyContent:'space-between',
  },
  useritemtext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
    width:wp('70%')
  },
  itemtext:
  {
    color: 'black',
    fontWeight: '300',
    fontSize: hp('1.5%'),
  },
  cardtext:
  {
    color:'black', 
    marginBottom:20,marginTop:20,
     fontFamily:'Poppins',fontSize:18,marginRight:10,

  },


});
export default styles;
