import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  View, Text,
} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';

////////////app component//////////
import AccountView from '../../../components/AccountView/AccountView';

/////////////////app pakages//////////////////
import { useIsFocused } from '@react-navigation/native';

//////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account = ({ navigation }) => {

////////////isfocused//////////
const isfocussed = useIsFocused()

  ///////////////textfields//////////////////
const [Username, setusername] = useState('');
const [Email,  setEmail] = useState('');
const[image,setImage]=useState()


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
 setEmail(response.data.email)
 setImage(BASE_URL+JSON.parse(response.data.image))
  })
  .catch(function (error) {
    console.log("error", error)
  })
  }
    useEffect(() => {
   
      if (isfocussed) {
        GetProfileData()
      }

  },[isfocussed]);
const logout=async ()=>
{
  await AsyncStorage.removeItem('Userid');
  await AsyncStorage.removeItem('Userdata');
  await AsyncStorage.removeItem('UserEmail');
  await AsyncStorage.removeItem('UserPass');
  navigation.navigate('Login')
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 0.05, marginTop: 15,alignItems:'center',
        marginHorizontal: 25,
      }}>
        <Text style={styles.balancetext}>Account</Text>
      </View>
      <View style={{
        flex: 0.25, alignItems: 'center',
        flexDirection: "row", justifyContent: 'space-around',
      }}>
        <Avatar.Image
          source={{uri: image}}
          style={{backgroundColor:Colors.border}}
          size={120}
        />
        <View>
          <Text style={styles.usertext}>{Username}</Text>
          <Text style={styles.itemtext}>{Email}</Text>
        </View>
      </View>
      <AccountView
      image={require('../../assets/icon/edit.png') }
      title={'Edit Profile'}
      icon={"chevron-forward-outline"}
      onpress={()=> navigation.navigate('Profile')}
      />
      <AccountView
     image={require('../../assets/icon/location.png') }
      title={'Update Subscription'}
      icon={"chevron-forward-outline"}
      onpress={()=> navigation.navigate('Updatesubs')}
      />
      <AccountView
        image={require('../../assets/icon/wishlist.png') }
      title={'Verification'}
      icon={"chevron-forward-outline"}
      onpress={()=> navigation.navigate('Verification')}
      />
      <AccountView
      image={require('../../assets/icon/card.png') }
      title={'Cards'}
      icon={"chevron-forward-outline"}
      onpress={()=> navigation.navigate('UpdateCard')}
      />
        <AccountView
      image={require('../../assets/icon/logout.png') }
      title={'Logout'}
      onpress={()=> logout()}
      />
    </SafeAreaView>

  )
};

export default Account;