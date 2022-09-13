import React, { useState ,useEffect,useRef} from "react";
import {
    Text, StyleSheet,
    ImageBackground,
    SafeAreaView, View,
    Image,
    StatusBar
} from "react-native";

/////////////////app images//////////////
import background from '../../../assets/images/screen1.svg'

////////////////app components/////////////
import CustomButtonhere from "../../../components/Button/CustomButton";
import OutlineButton from "../../../components/Button/OutlineButton";

///////////////app paakges///////////////
import Swiper from 'react-native-swiper'

///////////////app styles////////////
import styles from './styles';
 
//////////////api///////////////
import axios from 'axios';
import { BASE_URL } from "../../../utills/ApiRootUrl";


const Onboarding = ({navigation}) => {
  //////////swiper index states///////
  const swiperRef = useRef();
  const [index, setIndex] = useState(0);

  ////////////////api data////////////
///////////////index1///////////
  const[Index1image, setIndex1image]= useState()
  const[Index1title, setIndex1title]= useState()
  const[Index1paragraph, setIndex1paragraph]= useState()

  ///////////////index2///////////
  const[Index2image, setIndex2image]= useState()
  const[Index2title, setIndex2title]= useState()
  const[Index2paragraph, setIndex2paragraph]= useState()

  ///////////////index3///////////
  const[Index3image, setIndex3image]= useState()
  const[Index3title, setIndex3title]= useState()
  const[Index3paragraph, setIndex3paragraph]= useState()

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
<StatusBar backgroundColor='white' barStyle="dark-content"/>
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
        <View style={styles.slide1}>
        <View style={styles.imageview}>
                <Image
                          source={<background/>}
             //source={{uri:BASE_URL+Index1image}}
                    style={styles.image}
                    resizeMode='stretch'
                />
            </View>
            <View style={styles.textview}>
                    <Text style={styles.maintext}>{Index1title}</Text>
            <Text style={styles.subtext}>{Index1paragraph}</Text>
            </View>
            <View style={styles.buttonview}>
                <CustomButtonhere
                    widthset={'35%'}
                    title='Next'
                    onPress={() => swiperRef.current.scrollBy(1, true)}
                />
            </View>
        </View>
        <View style={styles.slide2}>
        <View style={styles.imageview}>
                <Image
                         source={{uri:BASE_URL+Index2image}}
                    style={styles.image}
                    resizeMode='stretch'
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
                <OutlineButton
                    widthset={'35%'}
                    title='Back'
                    onPress={() => swiperRef.current.scrollBy(-1, true)}
                />
                </View>
                    <View style={{flex:0.5,alignSelf:'flex-end',
                //backgroundColor:'red'
                }}>
                    <CustomButtonhere
                    widthset={'35%'}
                    title='Next'
                    onPress={() => swiperRef.current.scrollBy(1, true)}
                />
                </View>
            </View>
        </View>
        <View style={styles.slide3}>
        <View style={styles.imageview}>
                        <Image
                                source={{uri:BASE_URL+Index3image}}
                            style={styles.image}
                            resizeMode='stretch'
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
                        <OutlineButton
                            widthset={'35%'}
                            title='Back'
                            mode="outlined"
                            onPress={() => swiperRef.current.scrollBy(-1, true)}
                        />
                        </View>
                            <View style={{flex:0.5,alignSelf:'flex-end',
                        //backgroundColor:'red'
                        }}>
                            <CustomButtonhere
                            widthset={'35%'}
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