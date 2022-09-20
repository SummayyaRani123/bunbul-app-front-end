import React, { useState,useEffect } from "react";
import { Text, SafeAreaView, View,FlatList,Image,TextInput,TouchableOpacity } from "react-native";

import CustomHeader from "../../../components/CustomHeader/CustomHeader";

import styles from "./styles";
import Colors from "../../../utills/Colors";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Notifications } from "../../../model/Notifications";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';


const SeeAll= ({navigation, route }) => {
//seacrh states
const [predata] = useState(route.params);
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);


    //search textfield
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };


//faltlist state
    const [data, setdata]=useState()

    //get flatlist api calling
  const GetTopics= async() => {
    axios({
      method: 'GET',
      url:BASE_URL+'get-all-topics',
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data[0].images[0]))
      setFilteredDataSource(response.data);
      setMasterDataSource(response.data);
      setdata(response.data)
      console.log('flatlist data:',data)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }

  useEffect(() => {
    //GetTopics()
  },[]);
  return (
    <SafeAreaView style={styles.container}>
                       <CustomHeader
        screentitle={predata.catname}
        navigation={() => navigation.goBack()}
      /> 
      {/* <View style={styles.mainview}>
        <Text style={styles.maintext}>{predata.catname}</Text>
      </View> */}
 
      <FlatList
        data={Notifications}
        renderItem={({ item, index, separators }) => (
          //        <TouchableOpacity 
          // onPress={()=>navigation.navigate('TopicVideos',{item})}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:hp(2)}}>
          <Image
                 source={item.logo}
                    style={{height:hp(10),width:wp(20),borderRadius:item.logo ===24 || item.logo ===27 ?wp(0):wp(5)}}
                    resizeMode='contain'
                />
                <View style={{marginLeft:wp(3)}}>
                <Text style={styles.title} >
              {item.title}
            </Text>
            <Text style={styles.details} >
              {item.details}
            </Text>
                </View>
  

          </View>
        // </TouchableOpacity>
   
        )}
        keyExtractor={(item, index) => index}
      
      />
    </SafeAreaView>
  );
};


export default SeeAll;