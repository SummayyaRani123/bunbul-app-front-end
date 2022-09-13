import React, { useState, useEffect } from "react";
import {
    StatusBar,
    ImageBackground

} from "react-native";

///////////app imagaes////////
import { appImages } from "../../../constant/images";

/////////////////app styles//////////////
import styles from "./styles";
import Colors from '../../../utills/Colors';

////////////////app store data//////////////////
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    // setTimeout(() => {
    //  navigation.replace('Onboarding'); // Stack Name
    // }, 3000);
    const getData = async () => {
     
        try {
           await AsyncStorage.getItem('UserEmail')
                .then(db => {
                    console.log('usertype',{db})
                    if(db)
                    {
                            navigation.navigate('BottomTab');
                    }
                    else{
                        setTimeout(() => {
                            navigation.replace('Onboarding'); // Stack Name
                          }, 3000);
                    }
                            }  
                ).done();
            } catch (error) {
            }
   
    }
    useEffect(() => {
        getData();

    }, []);


    return (

        <ImageBackground source={appImages.splash}
            resizeMode="cover" style={styles.image}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content"/>

        </ImageBackground>


    );
};
export default SplashScreen;