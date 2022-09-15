import {StyleSheet,Dimensions,Platform} from 'react-native';

/////////////////app styles & colors/////////////
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  sliderContainer: {
    // width: wp(94),
    // height: hp(35),
    //     borderBottomLeftRadius:wp(6),
    // borderBottomRightRadius:wp(6),
    // borderRadius:wp(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    //shadowRadius: 5,
    elevation: 5,
  },
    item: {
      width: screenWidth - 60,
      height: screenWidth - 20,
    },
    imageContainer: {
      height: screenWidth - 20,
      //marginBottom: Platform.select({ios: 0, android: 0}), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 0,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
  
      resizeMode: 'cover',
    },
  });
export default styles;
