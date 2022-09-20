import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,FlatList,
    Image, View, Text, TouchableOpacity, StatusBar, ImageBackground
} from 'react-native';

////////////////app pkages//////////////
import Foundation from 'react-native-vector-icons/Foundation';
import Feath from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////app styles///////////////
import styles from './styles';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  ////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchResult = ({ navigation,route }) => {
console.log('props:',route.params)
/////////////prvoiud data states
const[predata]=useState(route.params)

    //status states
    const[appoinments,setappointments]=useState(route.params.appoinments)
    const[requests,setrequests]=useState(false)

  //////////faltlist state///////////////////
  const [DATA, setdata] = useState('')
  const [DATA1, setdata1] = useState('')
  const [totalitems, setotalitems] = useState()

  //get Seacrch Products api calling
  const GetSeacrchProducts = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + 'search/search-product?rating='+predata.prodStars+
      '&brand='+predata.brand.toLowerCase()+'&rangestart='+predata.prodStartPrice+
      '&rangeend='+predata.prodEndPrice,
    })
      .then(function (response) {
        console.log("product response....................", JSON.stringify(response.data))
        var items=response.data.length
        setotalitems(items)
        setdata1(response.data)
   
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
    //get Seacrch Doctors api calling
    const GetSeacrchDoctors = async () => {
      axios({
        method: 'GET',
        url: BASE_URL + 'search/search-doctor?location='+predata.location.toLowerCase()
       +'&rating='+predata.ratting
       +'&rangestart='+predata.startprice
       +'&rangeend='+predata.endprice,
      })
        .then(function (response) {
          console.log("doctor response here....................", JSON.stringify(response.data))
          var items=response.data.length
          setotalitems(items)
          setdata(response.data)
       
          console.log('arary item here',items)
          console.log("after set in state:",DATA)
        })
        .catch(function (error) {
          console.log("error", error)
        })
    }
  useEffect(() => {
    GetSeacrchProducts()
    GetSeacrchDoctors()
    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView  style={styles.container}>
         <View style={{flex:0.05,marginTop: 15,flexDirection:'row',
         justifyContent:'space-between',
        marginHorizontal:25,
        //backgroundColor:'red'
        }}>
           <Ionicons
          name='chevron-back'
          color={'black'}
          size={25}
         onPress={() => navigation.navigate('Home')}
        />
                                   <Text style={styles.balancetext}>Search</Text>
                                   <View style={{
                                     //backgroundColor:'yellow'
                                     }}>
     
                                   </View>
                     
                        </View>
                        <View style={{flex:0.05,marginTop: 25,flexDirection:'row',
         justifyContent:'space-between',
        marginHorizontal:25,
        //backgroundColor:'red'
        }}>
  
                                   <Text style={styles.balancetext}>Results</Text>
                                   <View style={{
                                     //backgroundColor:'yellow'
                                     }}>
   <Text style={styles.itemtext}>{totalitems} Items found</Text>
                                   </View>
                     
                        </View>
         

 
                        {
         appoinments=== true?
                              <View style={{flex:0.8,
                                //backgroundColor:"yellow"
                                }}>
                    


                            <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity onPress={()=>navigation.navigate('DDetail',item._id)}>
            <View style={styles.card}>
                       <View style={{justifyContent:"center",alignContent:'center'}}>
                                       <Image
              style={styles.itemimageView}
              source={item.pic}
            />
            <View style={{marginTop:10,flexDirection:'row',
           // backgroundColor:'yellow'
            }}>
            <View style={{flex:0.7,marginHorizontal:10
              //backgroundColor:'red'
              }}>
            <Text style={styles.useritemtext}>{item.username}</Text>
            <Text style={styles.itemtext}>{item.location}</Text>
              </View>
              <View style={{flex:0.3,
              //backgroundColor:'yellow',
              alignItems:'center',
              justifyContent:'center'}}>
              <Text style={styles.useritemtext}>{item.doctorFee}</Text>
              </View>
              </View>

            </View>
  
        </View>
        </TouchableOpacity>
          )}
          //keyExtractor={item => item.id}
          keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
        />
          

        </View>
        :
        null  
        }
           {
     appoinments=== false ?
                              <View style={{flex:0.9,
                                //backgroundColor:"yellow"
                                }}>
                            <FlatList
          data={DATA1}
         // numColumns={2}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity onPress={()=>navigation.navigate('Product',item._id)}>
            <View style={styles.card1}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',
         // backgroundColor:'yellow'
          }}>
    
                                <View style={{justifyContent:'space-between',
                            marginLeft:0,flexDirection:'row'}}>
                                                           <Image
              style={styles.itemimageView1}
              source={item.pic}
            />
            <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
            <Text style={styles.useritemtext}>{item.productName}</Text>
            <Text style={styles.itemtext1}>{item.productName}</Text>
            <View style={{flexDirection:'row',width:70,
            //backgroundColor:'red',
            justifyContent:'space-between'}}>
            <Foundation 
                                name="shopping-bag" 
                                color={Colors.Appthemecolor}
                                size={20}
                                onPress={() => navigation.toggleDrawer()}
                                />
                                   <Feath 
                                name="heart" 
                                color={'black'}
                                size={20}
                                onPress={() => navigation.toggleDrawer()}
                                />
            </View>
            </View>
           
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
            <Text style={styles.itemtext}>
          {item.price}
          </Text>
          </View>
            </View>
      
          
        </View>
    </TouchableOpacity>
          )}
          //keyExtractor={item => item.id}
          keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
        />
        </View>
        :
        null  
        }
    


</SafeAreaView>

  )
};

export default SearchResult;