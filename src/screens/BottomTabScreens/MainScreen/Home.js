import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,FlatList,StatusBar,
    Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////


////////////////////app pakages////////////
import DateTimePicker from '@react-native-community/datetimepicker';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setName,setAge } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

const Home = ({ navigation }) => {

       //Paymentsheet state and funnction
       const refRBSheet = useRef();

  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  
  //subscription state
  const[subs,setsubs]=useState('')

    //subscription state
    const[acceptitemid,setacceptitemid]=useState('')

  //status states
  const[appoinments,setappointments]=useState(true)
  const[requests,setrequests]=useState(false)

 //faltlist state
 const [DATA, setdata]=useState()
 const [DATA1, setdata1]=useState()

 //get DoctorRequests api calling
const GetDoctorRequests= async() => {
 var user= await AsyncStorage.getItem('Userid')
 axios({
   method: 'GET',
   url:BASE_URL+'appointments/get-doctor-appointments-req?doctorId=62d6e07431b4a37acc77c760'
   //+user,
 })
 .then(function (response) {
   console.log("response", JSON.stringify(response.data))
   setdata(response.data)
   dispatch(setName(response.data.name));
   dispatch(setAge(response.data.price));
 })
 .catch(function (error) {
   console.log("error", error)
 })
 }
 //get DoctorConfirmRequest api calling
 const GetDoctorConfirmRequest= async() => {
  var user= await AsyncStorage.getItem('Userid')
  axios({
    method: 'GET',
    url:BASE_URL+'appointments/get-doctor-appointments?doctorId=62d6e07431b4a37acc77c760'
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

  const subscription= async ()=>{
    var subs = await AsyncStorage.getItem('SubscriptionType')
    setsubs(subs)
console.log(" subscription here:",subs)
  }
useEffect(() => {
  GetDoctorRequests()
  GetDoctorConfirmRequest()
  subscription()
  
},[]);

  return (

    <SafeAreaView  style={styles.container}>
         
     <StatusBar backgroundColor={'white'} barStyle="dark-content"/>
         <View style={{flex:0.1,marginTop: hp(3),flexDirection:'row',
         justifyContent:'space-between',
        marginHorizontal:wp(5),
        }}>

                                   <View style={{marginLeft:wp(27)}}>
                                   <Text style={styles.balancetext}>Dashboard</Text>
                                   </View>

                        </View>

          {
          appoinments=== true ?
                              <View style={{flex:0.8,
                                //backgroundColor:"yellow"
                                }}>
                            <FlatList
          data={DATA}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity onPress={() => navigation.navigate('AppointmentDetail',item._id)}>
            <View style={styles.card}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    
                                <View style={{justifyContent:"center",alignContent:'center',
                            marginLeft:10}}>
            <Text style={styles.useritemtext}>Appointment No {item.appointmentNo}</Text>
            <Text style={styles.itemtext}>{item.location}</Text>
            <Text style={styles.itemtext}>{item.appointmentTime} | {item.appointmentDate}</Text>
            <Text style={styles.itemtext}>
          {item.price}
          </Text>
            </View>
            </View>
            <View >
    
            <Text style={styles.itemtext}>
          ${item.fee}
          </Text>
          </View>
        </View>
    </TouchableOpacity>
          )}
          //keyExtractor={item => item.id}
          keyExtractor={(item, index) => index.toString()}
            //scrollEnabled={false}
        />
        </View>
        :
        null  
        }
           {
          requests=== true ?
                              <View style={{flex:0.9,
                                //backgroundColor:"yellow"
                                }}>
                            <FlatList
          data={DATA1}
          renderItem={({ item, index, separators }) => (
    
            <View style={styles.card}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    
                                <View style={{justifyContent:"center",alignContent:'center',
                            marginLeft:10}}>
            {/* <Text style={styles.useritemtext}>{item.doctorId.username}</Text> */}
            <Text style={styles.itemtext}>{item.location}</Text>
            <Text style={styles.itemtext}>{item.appointmentTime} | {item.appointmentDate}</Text>
            <Text style={styles.itemtext}>
          {item.price}
          </Text>
            </View>
            </View>
            <View >
     
            <Text style={styles.itemtext}>
      
          </Text>
          </View>
        </View>
    
          )}
          //keyExtractor={item => item.id}
          keyExtractor={(item, index) => index.toString()}
            //scrollEnabled={false}
        />
        </View>
        :
        null  
        }
    <AcceptAppoinment
              refRBSheet={refRBSheet}
              onClose={() => refRBSheet.current.close()}
              title={'Bank Account'}
              appointmentNo={acceptitemid}
              navigate={appoinments}
            />
</SafeAreaView>

  )
};

export default Home;