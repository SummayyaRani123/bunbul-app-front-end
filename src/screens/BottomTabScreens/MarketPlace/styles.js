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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    
    elevation: 19,
    
  },
  Icon:
  {
      color:'#707070',
      marginLeft:wp(2),
      marginRight:wp(10)

  },
  maintext:{
    fontSize:hp('3%'),

    color:'#505050',
    fontFamily:fontFamily.Poppins_Medium
  },
  sidetext:{
    fontSize:hp(1.8),
    color:'#5A5A5A',
    fontFamily:fontFamily.Poppins_Medium
  },
 Topicsview:{
     marginTop:wp("2%"),
    flexDirection:'row',
    justifyContent: 'space-between' ,
    marginLeft:wp(3),
    alignItems:"center",
    marginBottom:hp(2)
 },
 SeeView:
 {
    borderRadius:25,
    justifyContent:'center',
alignItems:'center',
    // /margin:wp('1.8%'),
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'grey'
 },
Seetext:
{
    color:'#5C5C5C',
    fontSize:hp(1.5),
    fontFamily: fontFamily.Poppins_SemiBold,
    marginLeft:wp(4.5),
    marginRight:wp(4.5),
    marginBottom:wp(1),
    marginTop:wp(1),
    textAlign:'center'
  
},
  mainview:{
alignItems:'center',
  
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
sliderView:{
marginTop:hp(2),
  alignSelf:'center',
  //borderWidth: 2,
  borderRadius:30,
  height:wp(57),
  width:wp(88),
  marginBottom:hp(1),
  //borderColor:'gray',
  //backgroundColor:'white',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  
  elevation: 14,
  
},
itemimageView1:
{
    height:wp(55),
    width:wp('88%'),
    borderRadius:20,
    //marginVertical:wp('2%'),
    // /marginHorizontal:wp('2%'),
    alignItems:'center',
    borderColor:'orange',
    borderWidth:6
    
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
    headerFooterStyle: {
      width:wp(22),
height:hp(10),
borderRadius:20,
      borderColor:Colors.Appthemecolor,
      borderWidth:3,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      marginTop:hp(1),
    },
    textStyle: {
      textAlign: 'center',
      color:Colors.Appthemecolor,
      fontFamily:fontFamily.Poppins_SemiBold,
      fontSize: hp(1.8),
      padding: 7,
    },
});
export default styles;
