import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,Image,
 View, Text, TouchableOpacity,FlatList
} from 'react-native';
import { Notifications } from '../../../model/Notifications';

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

import { VerticalPoster } from '../../../model/mapData';
import ListCard from '../../../components/ListCard/ListCard';
import { appImages } from '../../../constant/images';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const data=[
  {id: '1', name: "Red", color: "#f44336", span: 1},
  {id: '2', name: "Pink", color: "#E91E63", span: 2},
  {id: '3', name: "Purple", color: "#9C27B0", span: 2},
  {id: '4', name: "Deep Purple", color: "#673AB7", span: 1},
  {id: '5', name: "Indigo", color: "#3F51B5", span: 1},
  {id: '6', name: "Blue", color: "#2196F3", span: 1},
 
]

const Profile = ({ navigation }) => {      
                
////////////button states////////////////
const [loading, setloading] = useState(0);
const [disable, setdisable] = useState(0);


///////////////textfields//////////////////
const [Username, setusername] = useState('');
const[image,setImage]=useState(appImages.user)
const [Password, setPassword] = useState('');
const [Email,  setEmail] = useState('');
const [TotalFee, settotalfee] = useState('');
const [OpeningTime, setopeningtime] = useState('');
const [ClosingTime, setclosingtime] = useState('');
const [Location, setlocation] = useState('');
const[desc,setDesc]=useState('')



 ///////get api for onboarding data//////////
 const GetProfileData= async() => {
  var user= await AsyncStorage.getItem('Userid')
  console.log("userid:",user)
  axios({
    method: 'GET',
    url:BASE_URL+"doctor/get-doctor?_id="+user
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
 /////////////setuserprofile data//////////
 setusername(response.data.username)
 setPassword(response.data.password)
 setEmail(response.data.email)
 settotalfee(response.data.doctorFee)
 setopeningtime(response.data.startTime)
 setclosingtime(response.data.endTime)
 setlocation(response.data.location)
 setImage(BASE_URL+JSON.parse(response.data.image))
 setDesc(response.data.description)
  })
  .catch(function (error) {
    console.log("error", error)
  })
  }
    useEffect(() => {
      //GetProfileData()
  },[]);
  return (

    <SafeAreaView style={styles.container}>
            {/* <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        > */}
        
      <View style={{
       marginTop: hp(8), 
        justifyContent:'center',
        marginHorizontal: hp(5),
        alignItems:'center'
      }}>
        <Text style={styles.toptext}>Profile</Text>
      </View>
      <View style={{
    alignItems: 'center',justifyContent:'center', 
    marginTop:hp(1),width:wp(27.6),height:hp(13),borderRadius:60,
    backgroundColor:'white',
    // borderTopRightRadius:100,
    // borderTopLeftRadius:100,
    // borderBottomLeftRadius:90,
    // borderBottomRightRadius:90,
    alignSelf:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  
      }}>
        

        <Avatar.Image
          source={appImages.user}
          style={{backgroundColor:'white',borderColor:'grey',borderWidth:0.7,
          shadowColor: '#000',
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 7,
        }}
          size={hp(13)}
        />

   
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
      <View style={{height:hp(4),width:wp(40),backgroundColor:'white',
      alignSelf:'center',borderRadius:wp(10),
      alignItems:'center',paddingHorizontal:wp(3),
      marginTop:hp(2),
      flexDirection:'row', justifyContent:'space-between',
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
        <Ionicons
          name='settings-sharp'
          color={'#9F9F9F'}
          size={20}
          onPress={() =>  navigation.navigate('Settings')}
       
        />

      </View>
      </TouchableOpacity>

      <View style={{alignSelf:'center'}}>
      <Text style={styles.underuserviewtext}>Earn Free Subscriptions, Invite Friend</Text>
      </View>
      <View style={styles.inputview}>


      <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        //flexGrow: 1,
        //flexDirection: 'row',
        // alignSelf: 'center',
        //flexWrap: 'wrap',
        width: responsiveWidth(80),
        alignSelf: 'center',
       // justifyContent: 'space-between',
     
      }}>
                <View style={{marginBottom:hp(2),marginTop:hp(2),alignSelf:"center"}}>
        <Text style={styles.savingtext}>Currently saving $60/Year</Text>
        </View>
      {Notifications.map((item, index) => {
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('SliderScreen',{navplace:'Profile',
                navtype:item.type})}> 
                    <View style={{flexDirection:'row',alignItems:'center',
                    marginBottom:hp(1)}}>
            <Image
                   source={item.logo}
                      style={{height:hp(10),
                        width:wp(20),
                        borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      resizeMode='contain'
                  />
                  <View style={{marginLeft:wp(3)}}>
                  <Text style={styles.title} >title
                {item.title}
              </Text>
              <Text style={styles.details} >
                {item.details}
              </Text>
                  </View>
            </View>
            </TouchableOpacity>

        );
      })}
    </ScrollView>
      {/* <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={Notifications}
          renderItem={({ item,index }) => {
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image
                   source={item.logo}
                      style={{height:hp(10),
                        width:wp(20),
                        borderRadius:item.logo === 24 || item.logo ===27 ?wp(0):wp(5)}}
                      resizeMode='contain'
                  />
                  <View style={{marginLeft:wp(3)}}>
                  <Text style={styles.title} >title
                {item.title}
              </Text>
              <Text style={styles.details} >
                {item.details}
              </Text>
                  </View>
            </View>
            }
          }
          keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        /> */}

 
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('EditBundle')}>
      <View style={{alignSelf:'center',marginTop:hp(2),marginBottom:hp(5)}}>
      <Text style={styles.lasttext}>Edit Bundle</Text>
      </View>
      </TouchableOpacity>

   
   {/* </ScrollView> */}
    </SafeAreaView>
  )
};

export default Profile;