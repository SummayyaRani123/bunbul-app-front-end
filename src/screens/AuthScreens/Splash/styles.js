import { 
    Dimensions,
    StyleSheet
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,1)',
      },
      image: {
        flex: 1,
        justifyContent: "center",
        alignContent:'center',
      
      },

  });
  export default styles;