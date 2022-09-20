import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,Image,
 View, Text, TouchableOpacity,
} from 'react-native';


/////////////////////app pakages///////////////
import { TextInput, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app styles////////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

import { appImages } from '../../../constant/images';


const Settings = ({ navigation }) => {


  return (

    <SafeAreaView style={styles.container}>
            <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
      <View style={{
       marginTop: hp(8), 
        justifyContent:'center',
        marginHorizontal: hp(5),
        alignItems:'center'
      }}>
        <Text style={styles.toptext}>Settings</Text>
      </View>
      <View style={{
    alignItems: 'center',justifyContent:'center', 
    marginTop:hp(1)
      }}>
        
        <TouchableOpacity onPress={()=> refRBSheet.current.open()}
      style={{
 alignItems: 'center',justifyContent:'center'
      }}
      >
        <Avatar.Image
          source={appImages.user}
          style={{backgroundColor:'white',borderColor:'grey',borderWidth:0.7}}
          size={120}
        />

      </TouchableOpacity>
   
      </View>
      
      <View style={{height:hp(4.5),width:wp(33),backgroundColor:'white',
      alignSelf:'center',borderRadius:wp(10),
      alignItems:'center',paddingHorizontal:wp(3),
      marginTop:hp(2),
justifyContent:'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 7,
      }}>
        <Text style={styles.usertext}>@username</Text>


      </View>

      <View style={styles.inputview}>
          <TouchableOpacity onPress={()=> navigation.navigate('UpdateProfile')}>
          <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:hp(2),
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Account Info</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          onPress={() => navigation.navigate('UpdateProfile')}

        />
          </View>
          </TouchableOpacity>

          <View style={styles.borderview}></View>
          <View style={{flexDirection:"row",justifyContent:'space-between',
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Connected Accounts</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          //onPress={() => {}}
       
        />
          </View>
          <View style={styles.borderview}></View>
          <View style={{flexDirection:"row",justifyContent:'space-between',
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Payment Methods</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
         // onPress={() => refRBSheet.current.open()}
       
        />
          </View>
          <View style={styles.borderview}></View>
          <View style={{flexDirection:"row",justifyContent:'space-between',
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Privacy</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          onPress={() => navigation.navigate('Privacy')}
       
        />
          </View>
          <View style={styles.borderview}></View>
          <View style={{flexDirection:"row",justifyContent:'space-between',
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Contact Support</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          //onPress={() => refRBSheet.current.open()}
       
        />
          </View>
   
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
      <View style={{alignSelf:'center',marginTop:hp(2)}}>
      <Text style={styles.lasttext}>Logout</Text>
      </View>
      </TouchableOpacity>

   
   </ScrollView>
    </SafeAreaView>
  )
};

export default Settings;