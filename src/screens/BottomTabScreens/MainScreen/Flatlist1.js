import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, FlatList, StatusBar,TouchableWithoutFeedback,
  Image, View, Text, TouchableOpacity,
} from 'react-native';


//////////////////////app components///////////////
import HorizontalPosterCard from '../../../components/CustomCards/HorizontalPosterCard';

///////////////////arrays data///////////
import { HorizontalPoster, VerticalPoster } from '../../../model/mapData';


const Flatlist1 = ({ navigation }) => {

  const horizontalrenderItem = ({ item }) => (
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
  )

  return (

        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={HorizontalPoster}
          renderItem={horizontalrenderItem}
          keyExtractor={(item, index) => index.toString()}
        //scrollEnabled={false}
        />


  )
};

export default Flatlist1;