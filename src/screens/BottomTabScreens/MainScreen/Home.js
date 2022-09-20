import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, FlatList, StatusBar,TouchableWithoutFeedback,
  Image, View, Text, TouchableOpacity,ScrollView
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

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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
    //GetDoctorConfirmRequest()
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
  const horizontalrenderItem = ({ item,index }) => {
    console.log("item here:",index);
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

  }


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
  
  //RenderAnyItem
const renderView=(item)=>{
  return(
        <View key={item.id} style={{
            margin: 2,
            padding:60,
            borderRadius: 2,
            backgroundColor: item.color,
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }} >
            <Text style={{color:'white'}}>{item.title}</Text>
            <View style={{flex:0.5}}>
            <Text style={{color:'white'}}>{item.title}</Text>
            <Text style={{color:'white'}}>{item.title}</Text>

            </View>
        </View>
  
  )
};

  return (
    <View
    style={{
      flex: 1,
    //paddingHorizontal:wp(3)
    }}>
            <View style={{marginTop:hp(5),marginLeft:wp(4),marginBottom:hp(2)}}>
       <Text style={styles.timespamtext}>{timespam}</Text>
      <Text style={styles.dateformattext}>{formatdate}</Text>
     </View>
  
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        // alignSelf: 'center',
        flexWrap: 'wrap',
        width: responsiveWidth(100),
        alignSelf: 'center',
        justifyContent: 'space-between',
     
      }}>
      {HorizontalPoster.map((item, index) => {
        return (
          <View
            style={{
              width:
                index == 0
                  ? responsiveWidth(100)
                  : index == 1
                  ? responsiveWidth(100)
                  : index % 6 == 0
                  ? responsiveWidth(94)
                  : (index - 1) % 6 == 0
                  ? responsiveWidth(94)
                  : responsiveWidth(50),
              height:  
              index == 0
              ? responsiveHeight(39)
              : index == 1
              ? responsiveHeight(37)
              : index % 6 == 0
              ?responsiveHeight(39)
              : (index - 1) % 6 == 0
              ? responsiveHeight(39)
              : responsiveHeight(43),
              
       
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: 'green',
              marginTop: responsiveHeight(2),
              // marginRight: index % 5 !== 0 ? responsiveWidth(5) : null,
               //alignSelf: 'center',
            }}>
{
index == 0
?
<HorizontalPosterCard
logoimage={item.logo}
bgimage={item.image}
title={item.title}
description={item.description}
index={index}
color={item.color}
onpressnav={() =>
navigation.navigate('SliderScreen',{navplace:'Home',
navtype:item.type})}
/>
 : index == 1
 ?
 <HorizontalPosterCard
logoimage={item.logo}
bgimage={item.image}
title={item.title}
description={item.description}
index={index}
color={item.color}
onpressnav={() =>
navigation.navigate('SliderScreen',{navplace:'Home',
navtype:item.type})}
/>
:  
  <VerticalPosterCard
logoimage={item.logo}
bgimage={item.image}
title={item.title}
description={item.description}
color={item.color}
onpressnav={() => navigation.navigate('SliderScreen',{navplace:'Home',navtype:item.type})}
/>
}


          </View>
        );
      })}
    </ScrollView>
  </View>
//     <SafeAreaView style={styles.container}>
//       <View style={{
//  marginTop: hp(3), 
//         marginHorizontal: wp(5),
//       }}>
//         <View style={{ }}>
//           <Text style={styles.timespamtext}>{timespam}</Text>
//           <Text style={styles.dateformattext}>{formatdate}</Text>
//         </View>
//       </View>
//       {/* <ScrollView
//         showsVerticalScrollIndicator={false}
//         showsHorizontalScrollIndicator={false}
//       >
//       <BrickList
//             data = {HorizontalPoster}
//             renderItem={(prop)=>renderView(prop)}
//             columns = {2}
//             />
//             </ScrollView> */}
//       <View style={{
//         height:hp(30)
//         //backgroundColor:"yellow"
//       }}>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}
//           data={HorizontalPoster}
//           renderItem={({ item,index }) => {
//             // console.log("item here:",index);
//             // index === 0 ?
//             <HorizontalPosterCard
//             logoimage={item.logo}
//             bgimage={item.image}
//             title={item.title}
//             description={item.description}
//             color={item.color}
//             onpressnav={() =>
//             navigation.navigate('SliderScreen',{navplace:'Home',
//         navtype:item.type})}
//           />
         
//           // <VerticalPosterCard
//           // logoimage={item.logo}
//           // bgimage={item.image}
//           // title={item.title}
//           // description={item.description}
//           // color={item.color}
//           // onpressnav={() => navigation.navigate('SliderScreen',{navplace:'Home',navtype:item.type})}
//           // />
//             }
//           }
//           keyExtractor={(item, index) => index.toString()}
//         //scrollEnabled={false}
//         />
//       </View>
//       <View style={{
//    alignItems:'center'
//       }}>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}
//           data={VerticalPoster}
//           renderItem={verticalrenderItem}
//           keyExtractor={(item, index) => index.toString()}
//         //scrollEnabled={false}
//         //horizontal={true}
//         numColumns={2}
//         />
//       </View>
//     </SafeAreaView>

  )
};

export default Home;