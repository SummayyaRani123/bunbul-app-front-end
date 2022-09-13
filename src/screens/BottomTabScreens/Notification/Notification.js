import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, FlatList,
  Image, View, Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////app styles/////////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = ({ navigation }) => {

  //////faltlist state////////
  const [DATA, setdata] = useState()

  /////get Notifications api calling//////
  const GetNotifications = async () => {
    var user = await AsyncStorage.getItem('Userid')
    axios({
      method: 'GET',
      url: BASE_URL + 'notification/get-doctor-notification?to=' + user,
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        setdata(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }

  useEffect(() => {
    GetNotifications()
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 0.1, marginTop: 25, flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
      }}>
        <View>
        </View>
        <Text style={styles.balancetext}>Notification</Text>
        <View>
        </View>
      </View>
      <View style={{
        flex: 0.9,
      }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (

            <View style={styles.card}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <View style={{
                  justifyContent: "center", alignContent: 'center',
                  marginLeft: 10
                }}>
                  <Text style={styles.useritemtext}>{item.msgContent}</Text>

                </View>
              </View>
              <View >
                <Ionicons
                  name={'chevron-forward-outline'}
                  color={'black'}
                  size={20}
                />

              </View>
            </View>

          )}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>

  )
};

export default Notification;