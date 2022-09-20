import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView, TextInput,FlatList,
    View, Text, TouchableOpacity, 
} from 'react-native';

////////////////////////////app component//////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';

//////////app pakages////////////////
import Feath from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

///////////////app styles///////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Search = ({ navigation,route }) => {
console.log('props',route.params)

const seacrhclear=useRef()
    
  
//////////////filter function///////////
const SearchClear=()=>{
  console.log("doc clearrrrrrrrrrrrrrr")
  seacrhclear.current.clear()
  
}

//seacrh states
const [search, setSearch] = useState('');
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
            console.log('here:',item)
            const itemData = item.username
              ? item.username.toUpperCase()
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

    //get Doctor flatlist api calling
  const GetDoctors= async() => {
    axios({
      method: 'GET',
      url:BASE_URL+'doctor/get-all-doctors',
    })
    .then(function (response) {
      console.log(" Search response", JSON.stringify(response.data))
      setFilteredDataSource(response.data);
      setMasterDataSource(response.data);
      setdata(response.data[0]);
      console.log('flatlist data:',data)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }

    //faltlist state
    const [data1, setdata1]=useState()
//seacrh states
const [search1, setSearch1] = useState('');
const [filteredDataSource1, setFilteredDataSource1] = useState([]);
const [masterDataSource1, setMasterDataSource1] = useState([]);


    //search textfield
    const searchFilterFunction1 = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource1.filter(
          function (item) {
            console.log('here:',item)
            const itemData = item.username
              ? item.username.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource1(newData);
        setSearch1(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource1(masterDataSource1);
        setSearch1(text);
      }
    };
     //get Products api calling
  const GetProducts = async () => {
    axios({
      method: 'GET',
      url: BASE_URL + 'products/get-all-product'
      //+user,
    })
      .then(function (response) {
        console.log("response....................", JSON.stringify(response.data))
        setFilteredDataSource1(response.data);
      setMasterDataSource1(response.data);
        setdata1(response.data)
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  useEffect(() => {
    //GetDoctors()
    //GetProducts()
  },[]);


//List states
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

  useEffect(() => {

    //SplashScreen.hide();
  }, []);
  return (

    <SafeAreaView  style={styles.container}>
      <View style={{marginBottom:hp(5)}}>
      <CustomHeader
        screentitle={'Marketplace'}
        navigation={() => navigation.goBack()}
      /> 
      </View>
   
          <View style={styles.inputView}>

   <TextInput
   ref={seacrhclear}
     style={styles.input}
     onChangeText={searchFilterFunction}
     //value={text}
     placeholder='Search'
     placeholderTextColor={'black'}
     clearButtonMode='always'
   />

   <View>
   <TouchableOpacity style={{marginRight:wp(10)}}
                     onPress={()=> SearchClear()}> 
     <Ionicons name="search" size={23} style={styles.Icon}/>
     </TouchableOpacity>
   </View>

   </View>
   <View style={{marginTop:hp(2) ,marginBottom:hp(5),marginHorizontal:wp(2)}}>
   <Text style={styles.balancetext}>Most Popular Searches</Text>
   </View>

   <View style={{
                             //backgroundColor:"yellow"
                             }}>
                         <FlatList
        data={DATA}
      // numColumns={2}
       renderItem={({ item, index, separators }) => (

         <View style={{width:wp(95),alignSelf:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<Feath name="arrow-up-right" size={23} style={styles.Icon}/>
<Text style={styles.balancetext}>Most Popular Searches</Text>

</View>
<Ionicons name="close" size={23} style={styles.Icon}/>

</View>
    <View style={styles.borderview}></View>
    </View>
       )}
       //keyExtractor={item => item.id}
       keyExtractor={(item, index) => index.toString()}
         scrollEnabled={false}
     />
     </View>
</SafeAreaView>

  )
};

export default Search;