import * as React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

///////////////app styles////////////////
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

import { appImages } from '../../constant/images';


const CustomHeader = (props) => {
  console.log('props',props)

    return(
        <View style={[styles.topview,
          {justifyContent:props.type === 'others'?'flex-start':'space-between'}
          ]}>
        <TouchableOpacity onPress={props.navigation}>
          <Image
            source={appImages.headerbackicon}
            style={styles.backicon}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <Text style={[styles.maintext,{marginLeft:props.type === 'others'? wp(5):wp(0)}]}>{props.screentitle}</Text>
{props.navtype === 'home'?

<Image
source={appImages.backicon}
style={styles.searchicon}
resizeMode='contain'
/>
: 
<View></View>
}

      </View>
    )
};

export default CustomHeader;