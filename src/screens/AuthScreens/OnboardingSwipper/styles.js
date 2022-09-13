import { 
    Dimensions,
    StyleSheet
} from 'react-native';
import { color } from 'react-native-reanimated';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.80;
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:'5%',
        //paddingHorizontal:'5%'
    },
    imageview:
    { 
         justifyContent: 'flex-end',
//backgroundColor:"red"
},
    image: {
        height:200,
        width:250,
    },
    textview:
    { 
         justifyContent:'center',
        alignSelf:'center',width:wp('75%')
        //backgroundColor:'yellow'
        },
        maintext:
        {
fontSize:hp('2.5%'),
fontWeight:'bold',
color:'black',
textAlign:'center'
        },
    subtext:
    {
fontSize:hp('2%'),
fontWeight:'400',
color:'black',
textAlign:'center'
    },
    buttonview:
    { 
        justifyContent: 'flex-end',
        alignItems:'flex-end',
            alignSelf:'flex-end',
            marginHorizontal:wp('5%')
        //backgroundColor:'yellow'
        },
        buttonview1:
        { 
            flexDirection:'row',
       //justifyContent:"space-between",
            alignItems:'flex-end',
               // alignSelf:'flex-end',
           // backgroundColor:'yellow'
            },
            slide1: {
                //flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
              },
              slide2: {
                //flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
              },
              slide3: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
              },
              text: {
                color: '#fff',
                fontSize: 30,
                fontWeight: 'bold'
              }
  });
  export default styles;