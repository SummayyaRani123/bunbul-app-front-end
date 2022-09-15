import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, FlatList, StatusBar,TouchableWithoutFeedback,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

import { TouchableRipple } from 'react-native-paper';
//////////////////////app components///////////////
import HorizontalPosterCard from '../../../components/CustomCards/HorizontalPosterCard';
import VerticalPosterCard from '../../../components/CustomCards/VerticalPosterCard';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

///////////////////arrays data///////////
import { HorizontalPoster, VerticalPoster } from '../../../model/mapData';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';


const Home = ({ navigation }) => {

  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  ///////////////date and time format//////////
  const [formatdate, setFormatDate] = useState()
  const [timespam, setTimeSpam] = useState()

  //faltlist state
  //const [DATA, setdata] = useState()

  //get DoctorConfirmRequest api calling
  const GetDoctorConfirmRequest = async () => {
    var user = await AsyncStorage.getItem('Userid')
    axios({
      method: 'GET',
      url: BASE_URL + 'appointments/get-doctor-appointments?doctorId=62d6e07431b4a37acc77c760'
      //+user,
    })
      .then(function (response) {
        console.log("response", JSON.stringify(response.data))
        setdata1(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }

  useEffect(() => {
    GetDoctorConfirmRequest()
    setdatetime()
  }, []);

  const setdatetime =()=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
const dateformat=monthNames[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()
setFormatDate(dateformat)
var curHr = d.getHours()
console.log(curHr)
if (curHr < 12) {
  setTimeSpam('Good Morning')
} else if (curHr < 18) {
  setTimeSpam('Good Afternoon')
} else {
  setTimeSpam('Good Evening')
}
  }
  const horizontalrenderItem = ({ item }) => (
    <HorizontalPosterCard
    logoimage={item.logo}
    bgimage={item.image}
    title={item.title}
    description={item.description}
    color={item.color}
    onpressnav={() =>
    navigation.navigate('SliderScreen',{navplace:'Home',
navtype:item.type})}
  />
  )
  const verticalrenderItem = ({ item }) => (
    <VerticalPosterCard
    logoimage={item.logo}
    bgimage={item.image}
    title={item.title}
    description={item.description}
    color={item.color}
    onpressnav={() => navigation.navigate('SliderScreen',{navplace:'Home',navtype:item.type})}
    />
  )
  
  return (

    <SafeAreaView style={styles.container}>
      <View style={{
 marginTop: hp(3), 
        marginHorizontal: wp(5),
      }}>
        <View style={{ }}>
          <Text style={styles.timespamtext}>{timespam}</Text>
          <Text style={styles.dateformattext}>{formatdate}</Text>
        </View>
      </View>
      <View style={{
        height:hp(30)
        //backgroundColor:"yellow"
      }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={HorizontalPoster}
          renderItem={horizontalrenderItem}
          keyExtractor={(item, index) => index.toString()}
        //scrollEnabled={false}
        />
      </View>
      <View style={{
   alignItems:'center'
      }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={VerticalPoster}
          renderItem={verticalrenderItem}
          keyExtractor={(item, index) => index.toString()}
        //scrollEnabled={false}
        //horizontal={true}
        numColumns={2}
        />
      </View>
    </SafeAreaView>

  )
};

export default Home;