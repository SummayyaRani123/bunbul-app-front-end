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
  maintext:{
    fontSize:hp('3%'),
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
  },
  sidetext:{
    fontSize:hp(2.3),
    color:'#5A5A5A',
    fontFamily:fontFamily.Poppins_Medium
  },
 Topicsview:{
     marginTop:wp("2%"),
    flexDirection:'row',
    justifyContent: 'space-between' ,
    marginLeft:wp(3)
 },
 SeeView:
 {
    borderRadius:25,
    justifyContent:'center',
    margin:wp('1.8%'),
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'grey'
 },
Seetext:
{
    color:'black',
    fontFamily: "Montserrat Bold",
    fontWeight:'bold',
    marginLeft:wp(4.5),
    marginRight:wp(4.5),
    marginBottom:wp(2),
    marginTop:wp(2),
    textAlign:'center'
  
},
  mainview:{
alignItems:'center',
    marginBottom:wp(0),
   marginTop:hp(5)
  },

slider:
{
    justifyContent:'center',
    alignItems:'center'
  //borderRadius:25
},
card:
{
    height:wp('28%'),
    width:wp('40%'),
    //height:10,
    //width:'20%',
    borderRadius:15,
    alignItems: 'space-between',
    justifyContent: 'space-between',
    borderWidth: 2,
    marginVertical:wp('2%'),
    marginHorizontal:wp('3%'),
    backgroundColor:'red'
},
itemimageView:
{
    height:wp('26%'),
    width:wp('40%'),
    borderRadius:20,
    marginTop:wp('1%')

},
itemimageView1:
{
    height:wp("48%"),
    width:wp('88%'),
    borderRadius:20,
    marginVertical:wp('2%'),
    marginHorizontal:wp('2%'),
    alignItems:'center',
    borderColor:'grey',
    borderWidth:12
    //position:'absolute'

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
profilepic:
{
  borderColor:Colors.themeColor,
borderWidth:2,
height:'85%',
width:'16%',
      borderRadius:50
    },

});
export default styles;
