import React, { useRef,useState,useEffect }from "react";
import { 
    Text, SafeAreaView,View,Image,
    TouchableOpacity,ScrollView,
} from "react-native";

//////////////////app images////////////
import { appImages } from "../../../constant/images";

///////////app components////////////
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import CustomButtonhere from "../../../components/Button/CustomButton";


////////////app Api things////////////
import axios from 'axios';
import { BASE_URL } from "../../../../utils/ApiRootUrl";

////////////////app redux///////////
import { useSelector } from 'react-redux';

//////////////app styles////////////////
import styles from "./styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';


const SliderScreen= ({navigation,route}) => {
  console.log("item hai location detail:",route.params)

    // previous screen data
   // const[backdata]=useState(route.params.item)
    //console.log("backid:",backdata._id)

     //button states
     const [loading, setloading] = useState(0);
     const [disable, setdisable] = useState(0);
     const [visible, setVisible] = useState(false);
     const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
     const onDismissSnackBar = () => setVisible(false);


    const [title, settitle]=useState()
    const [price, setprice]=useState()
    const [desc, setdesc]=useState()
    //const [images, setimages]=useState()

    //sliderimages
    const[image1,setimage1]=useState()
    const[image2,setimage2]=useState()
    const[image3,setimage3]=useState()

//faltlist state
const [data, setdata]=useState()
const [topicname, settopicname]=useState()
const [topicDetail, settopicDetail]=useState()
const [topicPrice, settopicPrice]=useState()

//get data api calling
// const GetTopics= async() => {
// axios({
//   method: 'GET',
//   url:BASE_URL+'get-topic?_id='+backdata._id,
// })
// .then(function (response) {
//   console.log("response", JSON.stringify(response.data.images[0]))
//   settopicname(response.data.name)
//   settopicDetail(response.data.description)
//   settopicPrice(response.data.price)
//   setimage1(response.data.images[0])
//   setimage2(response.data.images[1])
//   setimage3(response.data.images[2])

//   console.log('flatlist data:',data)
// })
// .catch(function (error) {
//   console.log("error", error)
// })
// }

                                                                                                                    

// submit subscriptiondata states

useEffect(() => { 

},[]);
const SpotifyImages = [
  { image: require("./images/Spotify/spotify1.1.png") },
  { image: require("./images/Spotify/spotify1.2.png") },
  { image: require("./images/Spotify/spotify1.3.png") },
  { image: require("./images/Spotify/spotify1.4.png") },
  { image: require("./images/Spotify/spotify1.5.png") },
];
const YoutubeImages = [
  { image: require("./images/Youtube/youtube1.1.png") },
  { image: require("./images/Youtube/youtube1.2.png") },
  { image: require("./images/Youtube/youtube1.3.png") },
  { image: require("./images/Youtube/youtube1.4.png") },
  { image: require("./images/Youtube/youtube1.5.png") },
];
const DisneyImages = [
    { image: require("./images/Disney/disney1.1.png") },
    { image: require("./images/Disney/disney1.2.png") },
    { image: require("./images/Disney/disney1.3.png") },
    { image: require("./images/Disney/disney1.4.png") },
    { image: require("./images/Disney/disney1.5.png") },
  ];
  const HBOMaxImages = [
    { image: require("./images/HBO/hbomax1.1.png") },
    { image: require("./images/HBO/hbomax1.2.png") },
    { image: require("./images/HBO/hbomax1.3.png") },
    { image: require("./images/HBO/hbomax1.4.png") },
    { image: require("./images/HBO/hbomax1.5.png") },

  ];
  const NetflixImages = [
    { image: require("./images/Netflix/netflix1.1.png") },
    { image: require("./images/Netflix/netflix1.2.png") },
    { image: require("./images/Netflix/netflix1.3.png") },
    { image: require("./images/Netflix/netflix1.4.png") },
    { image: require("./images/Netflix/netflix1.5.png") },

  ];
  const HuluImages = [
    { image: require("./images/Hulu/hulu1.1.png") },
    { image: require("./images/Hulu/hulu1.2.png") },
    { image: require("./images/Hulu/hulu1.3.png") },
    { image: require("./images/Hulu/hulu1.4.png") },
    { image: require("./images/Hulu/hulu1.5.png") },
  ];
  const logos = [
    { logo: require("./images/Spotify/spotify.png") },
    { logo: require("./images/Youtube/youtube.png") },
    { logo: require("./images/Disney/disney.jpg") },
    { logo: require("./images/Netflix/Netflix.png") },
    { logo: require("./images/HBO/hbo.jpg") },
  ];


  return (
    <SafeAreaView style={{}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
  {  route.params.navtype === 'Spotify'?   
   <ImageSlider
        imagesarray={SpotifyImages}
        onpress={()=> navigation.goBack()}
        />: route.params.navtype === 'Youtube'?    
        <ImageSlider
        imagesarray={YoutubeImages}
        onpress={()=> navigation.goBack()}
        />:
        route.params.navtype === 'Disney'?   
         <ImageSlider
        imagesarray={DisneyImages}
        onpress={()=> navigation.goBack()}
        />: route.params.navtype === 'Netflix'?   
         <ImageSlider
        imagesarray={NetflixImages}
        onpress={()=> navigation.goBack()}
        />
        :
        route.params.navtype === 'Hulu'?   
         <ImageSlider
        imagesarray={HuluImages}
        onpress={()=> navigation.goBack()}
        />
        :
        route.params.navtype === 'HBOmax'?   
         <ImageSlider
        imagesarray={HBOMaxImages}
        onpress={()=> navigation.goBack()}
        />
        :
        null}
        
<View style={{flexDirection:'row',alignItems:'center',marginHorizontal:wp(5),
marginTop:hp(3),margin:hp(2)

}}>
    <View    style={{
                }}>
     <Image 
                  source={
                    route.params.navtype === 'Spotify'?    
                    logos[0].logo
                :
                route.params.navtype === 'Youtube'?    
                logos[1].logo
                :
                route.params.navtype === 'Disney'?    
                logos[2].logo
                :
                route.params.navtype === 'Netflix'?    
                logos[3].logo
                :
                route.params.navtype === 'HBOmax'?    
                logos[4].logo
                :null
                }
                  style={{height:hp(6),width:wp(12),borderRadius: route.params.navtype === 'Netflix'? wp(0):wp(3)
                   // borderBottomLeftRadius:3
              // borderRadius:3
                }}
                  resizeMode='contain'
                />
    </View>
   
                <Text style={styles.maintext}>
                {
                         route.params.navtype === 'Spotify'?   'Spotify'
           :
           route.params.navtype === 'Youtube'?    'YouTube Music'
           :
           route.params.navtype === 'Disney'?    'Disney Plus'
           :
           route.params.navtype === 'Netflix'?   'Netflix'   
           :
           route.params.navtype === 'HBOmax'?  'HBO Max'
           :null
                }    
     
                </Text>
</View>
<View style={{alignItems:'center',justifyContent:'center'}}>

                <Text style={styles.subtext}>Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                 magna aliquyam erat, sed diam</Text>
</View>
<View style={styles.buttonview}>
            <CustomButtonhere
              title={'Add to Bundle'}
              widthset={'60%'}
              loading={loading}
              disabled={disable}
              onPress={() => navigation.navigate('BottomTab')}
            /></View>
            </ScrollView>
  
    </SafeAreaView>
  );
};


export default  SliderScreen;