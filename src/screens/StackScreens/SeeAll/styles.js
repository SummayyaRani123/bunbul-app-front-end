import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import Colors from '../../../utills/Colors';

import { fontFamily } from '../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'white',
    flex:1,
    paddingVertical:wp("5%"),
    paddingHorizontal:wp('4%'),
    
  },

  input: {
    position:'absolute',
    marginLeft:wp('10%'),
color:'black'
,width:wp('80%'),
borderRadius:15,
//backgroundColor:'red'
  },
  
  inputView:{
    flexDirection:'row',
    justifyConten:'space-around',
    alignItems:'center',
    alignContent:'center',
    borderWidth: 2,
    borderRadius:50,
    height: wp('13%'),
    marginBottom:wp('2%'),
    borderColor:Colors.bordercolors,
    //backgroundColor:'red'
  },
  Icon:
  {
      color:Colors.themeColor,
      marginLeft:wp('3%')

  },
  title: {
    fontSize: hp(2.5),
fontFamily:fontFamily.Poppins_Medium,
    marginBottom: hp(0),
    color: 'black',
},
details: {
    fontSize: hp(1.7),
fontFamily:fontFamily.Poppins_Regular,
    color: 'black',
    width:wp(70)
},
  maintext:{
    fontSize:hp('3%'),
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
    marginBottom:wp('5%')
  },


itemimageView:
{
    height:wp('26%'),
    width:wp('40%'),
    borderRadius:20,
    marginTop:wp('1%')

},

videotext:
{
    position:'absolute',
    marginTop:wp('20%'),
    marginLeft:wp('4%'),
    color:'white',
    fontFamily: "Montserrat Bold",
    //fontWeight:'bold',
},
linearGradient: {
  borderRadius: 20,
  height:wp('28%'),
  width:wp('40%'),
  marginVertical:wp('2%'),
  marginHorizontal:wp('3%'),
},
});
export default styles;
