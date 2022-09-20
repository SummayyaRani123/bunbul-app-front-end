import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,Image,
 View, Text, TouchableOpacity,
} from 'react-native';

/////////////////app components////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';

/////////////////////app pakages///////////////
import { TextInput, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app styles////////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { Switch } from 'react-native-paper';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

import { appImages } from '../../../constant/images';


const Notifications = ({ navigation,route }) => {
    //////////////previous data///////////
const [predata] = useState(route.params);

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (

    <SafeAreaView style={styles.container}>
                 <CustomHeader
        screentitle={predata.navplace === 'Auth'?'2 Factor Authentication':'Notifications'}
        navigation={() => navigation.goBack()}
      /> 
      <View style={styles.inputview}>
          <View style={styles.maincontainer}>
          <Text style={styles.optiontext}>{predata.navplace === 'Auth'?'Enable 2 Factor':'Allow Notification'}</Text>
          <Switch value={isSwitchOn}
          color={Colors.Appthemecolor}
          onValueChange={onToggleSwitch} />
          </View>
      </View>

    </SafeAreaView>
  )
};

export default Notifications;