import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

//////////////////app components//////////
import BadgeView from '../BadgeView/BadgeView';

///////////////app pakages/////////////////
import { TouchableRipple } from 'react-native-paper';

///////////////////app images/////////////////
import { appImages } from '../../constant/images';

///////////////////app styles////////////////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import HorizontalCardstyles from './styles/HorizontalCardstyle';
import VerticalCardstyles from './styles/VerticalCardstyle';

const HorizontalPosterCard = (props) => {
  console.log('props in flatlist:',props)
  return (
    <View style={HorizontalCardstyles.container}>
          <TouchableRipple
           rippleColor="rgba(0, 0, 0, .05)"
          style={[props.span === 2?HorizontalCardstyles.cardContainer:VerticalCardstyles.cardContainer,{
            borderRadius:wp(15),height:props.span === 2?hp(30):hp(40),width:props.span === 2?wp(45):wp(40),marginBottom:hp(10)
            }]} onPress={props.onpressnav}>
      <View style={[props.span === 2?HorizontalCardstyles.cardContainer:VerticalCardstyles.cardContainer,
      {backgroundColor:props.color,
      height:props.span === 2?hp(35):hp(30),width:props.span === 2?wp(95):wp(40)
      }]}>
        <Image style={[props.span === 2?HorizontalCardstyles.imageStyle:VerticalCardstyles.imageStyle,
        {height:props.span === 2?hp(25):hp(25),width:props.span === 2?wp(95):wp(40)}]}
         source={props.bgimage} 
        resizeMode={'cover'}
        />
        <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:wp(2),
    marginTop:hp(1)
    }}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
        <Image style={{height:hp(6),width:wp(12),borderRadius:wp(3)}} source={props.logoimage} />
        <View style={[props.span === 2?HorizontalCardstyles.infoStyle:VerticalCardstyles.infoStyle]}>
          <Text style={[props.span === 2?HorizontalCardstyles.titleStyle:VerticalCardstyles.titleStyle]}>{props.title}</Text>
          <Text style={[props.span === 2?HorizontalCardstyles.categoryStyle:VerticalCardstyles.categoryStyle]}>{props.description}</Text>
        </View>
        </View>
        <TouchableOpacity onPress={()=>{}}>
              <BadgeView
             title={'Subscribe'}
             width={'23%'}
             state={true}
               />
              </TouchableOpacity >

        </View>
      </View>
      </TouchableRipple>
    </View>

  );
};



export default HorizontalPosterCard;