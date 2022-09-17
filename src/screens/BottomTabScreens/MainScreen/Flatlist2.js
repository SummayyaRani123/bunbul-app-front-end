import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, FlatList, StatusBar,TouchableWithoutFeedback,
  Image, View, Text, TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import VerticalPosterCard from '../../../components/CustomCards/VerticalPosterCard';


///////////////////arrays data///////////
import { VerticalPoster } from '../../../model/mapData';


const Flatlist2 = ({ navigation }) => {

  const verticalrenderItem = ({ item }) => (
    <VerticalPosterCard
    logoimage={item.logo}
    bgimage={item.image}
    title={item.title}
    description={item.description}
    color={item.color}
    onpressnav={() => navigation.navigate('SliderScreen',{navplace:'Home',navtype:item.type})}
    />
  )
  

  return (

        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={VerticalPoster}
          renderItem={verticalrenderItem}
          keyExtractor={(item, index) => index.toString()}
        //scrollEnabled={false}
        //horizontal={true}
        numColumns={2}
        />

  )
};

export default Flatlist2;