import * as React from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
import {
    Avatar,
} from 'react-native-paper';

import { appImages } from '../../constant/images';

const ListCard = (props) => {
    console.log('props here:', props)
    return (
        <View style={styles.card}>
<View style={{flexDirection:'row'}}>
<Image
                        source={appImages.backicon}
                        style={{ width: wp(6.5), height: hp(3.7)}}
                      />
    <View>
    <Text style={styles.balancetext}>@username</Text>
    <Text style={styles.balancetext}>@username</Text>
    </View>
</View>
        </View>

    )
};

export default ListCard;