import React, { useState ,useEffect,useRef} from "react";
import {
    Text, StyleSheet,
    ImageBackground,
    SafeAreaView, View,
    Image,
    StatusBar
} from "react-native";

//////////////app images////////////
import { appImages } from "../../../constant/images";

//////////////app pakages/////////////
import Svg, {
    Use,
    Image as Svgimage,
    Circle,
    SvgUri,
    SvgXml 
  } from 'react-native-svg';

////////////////app components/////////////
import CustomButtonhere from "../../../components/Button/CustomButton";
import OutlineButton from "../../../components/Button/OutlineButton";

///////////////app paakges///////////////
import Swiper from 'react-native-swiper'

///////////////app styles////////////
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

//////////////api///////////////
import axios from 'axios';
import { BASE_URL } from "../../../utills/ApiRootUrl";


const Onboarding = ({navigation}) => {
  //////////swiper index states///////
  const swiperRef = useRef();
  const [index, setIndex] = useState(0);

  ////////////////api data////////////
///////////////index1///////////
  const[Index1image, setIndex1image]= useState(appImages.save)
  const[Index1title, setIndex1title]= useState('Save')
  const[Index1paragraph, setIndex1paragraph]= useState('Save money on your monthly subscriptions without having to cancel')

  ///////////////index2///////////
  const[Index2image, setIndex2image]= useState(appImages.manage)
  const[Index2title, setIndex2title]= useState('MANGAGE')
  const[Index2paragraph, setIndex2paragraph]= useState('Keep tabs on all your monthly subscriptions and get one monthly bill')

  ///////////////index3///////////
  const[Index3image, setIndex3image]= useState(appImages.manage)
  const[Index3title, setIndex3title]= useState('DISCOVER')
  const[Index3paragraph, setIndex3paragraph]= useState('Finding your new favorite subscription made convenient')

  ///////get api for onboarding data//////////
  const GetOnboardingData= async() => {
    axios({
      method: 'GET',
      url:BASE_URL+"onboarding/get-all-onboarding"
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
   /////////////index1//////////
   setIndex1image(response.data[0].image)
   setIndex1title(response.data[0].title)
   setIndex1paragraph(response.data[0].paragraph)

      /////////////index2//////////
      setIndex2image(response.data[1].image)
      setIndex2title(response.data[1].title)
      setIndex2paragraph(response.data[1].paragraph)

            /////////////index3//////////
            setIndex3image(response.data[2].image)
            setIndex3title(response.data[2].title)
            setIndex3paragraph(response.data[2].paragraph)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
      useEffect(() => {
        GetOnboardingData()
    },[]);

    return (
        <SafeAreaView style={styles.container}>
{/* <StatusBar backgroundColor='white' barStyle="dark-content"/> */}
<Swiper style={styles.wrapper} 
showsPagination={false}
autoplay={false}
ref={swiperRef}
index={index}
onIndexChanged={(index) => {
    setIndex(index)
}
   }
>
        <View style={styles.slide}>
        <View style={{alignItems:'flex-end',justifyContent:'flex-end',marginBottom:hp(10)}}>


<Image
          source={appImages.savetop}
    style={{height:hp(27),width:wp(70)}}
    resizeMode='cover'

/>
</View>
        <View style={styles.imageview}>
                <Image
                          source={Index1image}
             //source={{uri:BASE_URL+Index1image}}
                    style={{       height:hp(20), width:wp(70),}}
                    resizeMode='contain'
                
                />
            </View>
            <View style={styles.textview}>
                    <Text style={styles.maintext}>{Index1title}</Text>
            <Text style={styles.subtext}>{Index1paragraph}</Text>
            </View>
            
            <View style={styles.buttonview}>
                <CustomButtonhere
                    widthset={'32%'}
                    title='Next'
                    onPress={() => swiperRef.current.scrollBy(1, true)}
                />
            </View>
        </View>
        <View style={styles.slide}>
        <View style={{alignItems:'center',justifyContent:'center',marginBottom:hp(18)}}>


<Image
          source={appImages.managetop}
    style={{height:hp(20),width:wp(100)}}
    resizeMode='contain' 
/>
</View>
        <View style={styles.imageview}>
                <Image
source={Index2image}
                        // source={{uri:BASE_URL+Index2image}}
                        style={{height:hp(23), width:wp(80),}}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.textview}>
                    <Text style={styles.maintext}>{Index2title}</Text>
            <Text style={styles.subtext}>{Index2paragraph}</Text>
            </View>
            <View style={styles.buttonview1}>
                <View style={{flex:0.5,
                //backgroundColor:'red'
                }}>
                <CustomButtonhere
                  widthset={'30%'}
                    title='Back'
                    onPress={() => swiperRef.current.scrollBy(-1, true)}
                />
                </View>
                    <View style={{flex:0.5,alignSelf:'flex-end',
                //backgroundColor:'red'
                }}>
                    <CustomButtonhere
              widthset={'30%'}
                    title='Next'
                    onPress={() => swiperRef.current.scrollBy(1, true)}
                />
                </View>
            </View>
        </View>
        <View style={styles.slide}>
        <View style={{marginBottom:hp(5)}}>


<Image
          source={appImages.discovertop}
    style={{height:hp(30),width:wp(59)}}
    resizeMode='contain'

/>
</View>
        <View style={styles.imageview}>
                        <Image
                        source={Index3image}
                                //source={{uri:BASE_URL+Index3image}}
                                style={{       height:hp(20), width:wp(70),}}
                                resizeMode='contain'
                            />
                    </View>
    
                    <View style={styles.textview}>
                            <Text style={styles.maintext}>{Index3title}</Text>
                    <Text style={styles.subtext}>{Index3paragraph}</Text>
                    </View>
                    <View style={styles.buttonview1}>
                        <View style={{flex:0.5,
                        //backgroundColor:'red'
                        }}>
                        <CustomButtonhere
                          widthset={'30%'}
                            title='Back'
                            mode="outlined"
                            onPress={() => swiperRef.current.scrollBy(-1, true)}
                        />
                        </View>
                            <View style={{flex:0.5,alignSelf:'flex-end',
                        //backgroundColor:'red'
                        }}>
                            <CustomButtonhere
                            widthset={'30%'}
                            title='Next'
                            //mode={'contained'}
                            onPress={() => navigation.navigate('Signup')}
                        />
                        </View>
                    </View>
        </View>
      </Swiper>

        </SafeAreaView>
    );
};
export default Onboarding;