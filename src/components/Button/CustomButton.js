import * as React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const CustomButtonhere = ({
    icon,
    mode,
    title,
    onPress,
    loading,
    disable,
    widthset,
    state
}) => {

    return(
<View style={styles.container}>
  <Button 
    uppercase={false}
  color={Colors.Appthemecolor}
  icon={icon} 
  mode={state === true?'outlined':"contained"}
  contentStyle={[styles.buttoncontent,{width:wp(widthset)}]}
  style={[styles.button,{width:wp(widthset)}]}
  labelStyle={styles.label}
  onPress={onPress}
  disabled={disable}
  loading={loading}
  >
    {title}
  </Button>
  </View>
    )
};

export default CustomButtonhere;