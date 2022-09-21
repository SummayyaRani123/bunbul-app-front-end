import React, { useState,useEffect } from "react";
import { Text, SafeAreaView, View,FlatList,Image,TextInput,ScrollView,
   KeyboardAvoidingView,TouchableOpacity } from "react-native";
import styles from "./styles";
import Colors from "../../../utills/Colors";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

import { Notifications } from "../../../model/Notifications";

import { Popular, Video,Audio, PersonalCare,Delivery,News} from "../../../model/marketData";


const MarketPlace= ({navigation}) => {
//seacrh states
const [search, setSearch] = useState('');
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);


    //slider state
    const [sliderdata, setsliderData] = useState('');
    const [topicname,settopicname]=useState()
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
//username state
const[username,setusename]= useState()
const[UserImage,setUserImage]= useState()

//faltlist state
    const [data, setdata]=useState()

    //get flatlist api calling
  const GetTopics= async() => {
    axios({
      method: 'GET',
      url:BASE_URL+'get-all-topics',
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
      setsliderData(response.data[0].images)
      settopicname(response.data[0].name)
      setFilteredDataSource(response.data);
      setMasterDataSource(response.data);
      setdata(response.data)
      console.log('flatlist data:',sliderdata)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }

  const getdata=async ()=>{
    var data=await AsyncStorage.getItem('Userdata')
    setusename(data)
    var image=await AsyncStorage.getItem('UserImage')
    setUserImage(image)
    //await AsyncStorage.removeItem('userdata')
    console.log("userdata",data,BASE_URL+image)
  }
   
  useEffect(() => {
    GetTopics(),
    getdata()
  
  },[]);
  const GetUserInfo=() => {
    //console.log("obj:",email)
  axios({
    method: 'GET',
    url: BASE_URL+'get-all-topics',
    data:{
        
    },
  })
  .then(function (response) {
    //console.log("response", JSON.stringify(response.data.allPlayLists))
    setdata(response.data.allPlayLists)
    //console.log("data hai:",data)
  })
  .catch(function (error) {
    console.log("error", error)
  })
}
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
  >
    <SafeAreaView style={styles.container}>

      <View style={styles.mainview}>
        <View>
        <Text style={styles.maintext}>Marketplace</Text>
        <Text style={styles.sidetext}>{username}</Text>
        </View>
      </View>
      <TouchableOpacity
      style={styles.inputView}
      onPress={()=>navigation.navigate('Search')}>
<TextInput
  style={styles.input}
  editable={false}
  placeholder='Search'
  placeholderTextColor={'#707070'}
  clearButtonMode='always'
/>
  <Ionicons name="search" size={20} style={styles.Icon}/>
      </TouchableOpacity> 

  <View   style={styles.sliderView}>
  <SliderBox
  style={styles.itemimageView1}
  //images={images}
  images={[
  //  require("../../StackScreens/SliderScreeen/images/Disney/disney1.1.png") ,
 require("../../StackScreens/SliderScreeen/images/Disney/disney1.2.png") ,
require("../../StackScreens/SliderScreeen/images/Disney/disney1.3.png"),
require("../../StackScreens/SliderScreeen/images/Disney/disney1.4.png") ,
 require("../../StackScreens/SliderScreeen/images/Disney/disney1.5.png") 
    // {uri:BASE_URL+sliderdata[0]},
    // {uri:BASE_URL+sliderdata[1]},
    // {uri:BASE_URL+sliderdata[2]},
    // require('../../Assets/Header.png'),
    // require('../../Assets/logo.png'),
    // require('../../Assets/topics.png'),
 
  ]}
  sliderBoxHeight={150}
  dotStyle={{
    width: 0,
    height: 0,
    padding: 0,
    margin: 0
  }}
  //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
  ImageComponentStyle={{borderRadius: 25, width: '85%', marginTop: 0}}
  imageLoadingColor="orange"
 // dotColor="orange"
  //inactiveDotColor="#90A4AE"
/>   
  </View>

<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'Popular'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Popular</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'Popular'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={Popular}
                //numColumns={4}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={()=>navigation.navigate('SliderScreen',{navplace:'Market',
                navtype:item.type})}> 
                              <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                </TouchableOpacity>
    
                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'Video Entertainment'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Video Entertainment</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'Video Entertainment'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={Video}
                //numColumns={4}
                renderItem={({ item }) =>
                  <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'Audio Entertainment'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Audio Entertainment</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'Audio Entertainment'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={Audio}
                //numColumns={4}
                renderItem={({ item }) =>
                  <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'Personal care'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Personal care</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'Personal care'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={PersonalCare}
                //numColumns={4}
                renderItem={({ item }) =>
                  <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'Delivery'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>Delivery</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'Delivery'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={Delivery}
                //numColumns={4}
                renderItem={({ item }) =>
                  <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('SeeAll',{catname:'News'})}>
      <View style={styles.Topicsview}>
      <Text style={styles.sidetext}>News</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('SeeAll',{catname:'News'})}>View All</Text>
      </View>
      </View>
      </TouchableOpacity>

      <FlatList
                data={News}
                //numColumns={4}
                renderItem={({ item }) =>
                  <View style={{ marginBottom: 10,margin:wp(1.5),alignItems:'center' }}>
                    {/* <Text style={{ color: 'black' }}>{item.path}</Text> */}
                    <Image
                      source={item.logo}
                      style={{height:hp(10),width:wp(20),borderRadius:item.logo === 0 || item.logo ===27 ?wp(0):wp(5)}}
                      imageStyle={{
                        borderRadius: 15, borderWidth: 1,
                        borderColor: 'black', padding: 10
                      }}>
                    </Image>
                    <Text style={{ color: 'black',width:wp(20),textAlign:'center',marginTop:hp(1) }}>
                      {item.title}</Text> 
                  </View>

                }
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
</View>

    </SafeAreaView>
    </ScrollView>
  );
};


export default MarketPlace;