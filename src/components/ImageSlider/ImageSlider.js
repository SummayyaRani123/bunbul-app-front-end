import React, { useRef,useState,useEffect }from "react";
import {View,Text,ActivityIndicator,Image,Dimensions,TouchableOpacity} from 'react-native';

/////////////app styles//////////////
import styles from './styles';
import Colors from "../../utills/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

///////////Slider pkages/////////////
import Carousel, { Pagination ,ParallaxImage} from 'react-native-snap-carousel';
import { appImages } from "../../constant/images";

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const ImageSlider = (props) => {


      /////////////component states//////////////////
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    
    const renderItem = ({ item }) => {
        return (
                <View style={{
                    width:wp(100),
                    alignItems: 'center'

                }}>
                        <Image 
                  source={item.image}
                  style={{width:wp(100),height:hp(70),
        
                }}
                  resizeMode='cover'
                />
                <TouchableOpacity 
                style={{position:'absolute',left:0,marginLeft:wp(5),top:hp(2)}}
                onPress={props.onpress}>
                <Image 
                  source={appImages.sliderback}
                  style={{width:wp(10),height:hp(10),
               
                }}
                  resizeMode='contain'
                />
                </TouchableOpacity>
        
       
</View>
        )
    }
    const pagination = () => {
        return (
            <Pagination
                dotsLength={props.imagesarray.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                }}
                // animatedDuration={50}
                dotElement={
                    <View
                        style={{
                            width: wp(3.7),
                            height: wp(3.7),
                            borderRadius: 30,
                            marginHorizontal: wp(2.2),
                            backgroundColor:'#FFCF21'
                    
                        }}></View>
                }
                inactiveDotElement={
                    <View
                        style={{
                            width: wp(3.7),
                            height: wp(3.7),
                            borderRadius: 30,
                            marginHorizontal: wp(2.2),
                            backgroundColor:'#fff'
                        }}></View>
                }
            />
        );
    };
      const goForward = () => {
        carouselRef.current.snapToNext();
      };
    useEffect(() => {
        //setCarolist(carolist);
      }, []);
    return(
        <View style={styles.sliderContainer}>
        <Carousel
          ref={carouselRef}
          itemWidth={responsiveWidth(100)}
          sliderWidth={responsiveWidth(100)}
          data={props.imagesarray}
          renderItem={renderItem}
          containerCustomStyle={{
              marginTop: hp(0),
              width:wp(100),
              height:hp(67),
            //   alignSelf: 'center',
              borderRadius:wp(0),
              shadowColor: '#000',
              shadowOffset: {
                width: 5,
                height: 10,
              },
              shadowOpacity: 0.9,
              shadowRadius: 5,
              elevation: 9,
          }}
          onSnapToItem={index => {
              setActiveSlide(index)
              console.log(index)
          }}
        />
                        <View
                      style={{
                          alignSelf: 'center',
                          position:'absolute',
                          bottom:0
                      }}>
                      {pagination()}
                  </View>
      </View> 
    )
};

export default ImageSlider;