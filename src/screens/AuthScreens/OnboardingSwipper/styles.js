import { 
    Dimensions,
    StyleSheet
} from 'react-native';

///////////// app colors////////
import Colors from '../../../utills/Colors';

////////////app fonts/////////
import { fontFamily } from '../../../constant/fonts';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems:'center',
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    imageview:
    { 
         justifyContent: 'center',
         alignItems:"center",
         height:hp(20)
         //marginTop:hp(5)
//backgroundColor:"red"
},
    image: {
        height:hp(20),
        width:wp(70),
    },
    textview:
    { 
         justifyContent:'center',
        alignSelf:'center',
        marginTop:hp(8),
        width:wp(80)
        //backgroundColor:'yellow'
        },
        maintext:
        {
fontSize:hp(2.5),
fontFamily:fontFamily.Poppins_SemiBold,
color:Colors.Appthemecolor,
textAlign:'center'
        },
    subtext:
    {
fontSize:hp('2%'),
fontFamily:fontFamily.Poppins_Regular,
color:'#5C5C5C',
textAlign:'center',
marginTop:hp(3)
    },
    buttonview:
    { 
        justifyContent: 'flex-end',
       alignItems:'flex-end',
            alignSelf:'flex-end',
            marginHorizontal:wp('5%'),
            bottom:0,
            top:0,
            left:0,
            marginTop:hp(10)
        //backgroundColor:'yellow'
        },
        buttonview1:
        { 
            flexDirection:'row',
       //justifyContent:"space-between",
            alignItems:'flex-end',
            marginTop:hp(12)
               // alignSelf:'flex-end',
           // backgroundColor:'yellow'
            },
            slide: {
                flex: 1,
                //justifyContent: 'center',
                //alignItems: 'center',
                backgroundColor: 'white'
              },
              text: {
                color: '#fff',
                fontSize: 30,
                fontWeight: 'bold'
              }
  });
  export default styles;