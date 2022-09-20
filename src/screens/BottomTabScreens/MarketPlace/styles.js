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
  maintext:{
    fontSize:hp('3%'),
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
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
    color:'#5C5C5C',
    fontSize:hp(1.3),
    fontFamily: fontFamily.Poppins_SemiBold,
    marginLeft:wp(4.5),
    marginRight:wp(4.5),
    marginBottom:wp(1.2),
    marginTop:wp(1.2),
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
