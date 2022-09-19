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

const HorizontalPosterCard = (props) => {
  return (

          <TouchableRipple
           rippleColor="rgba(0, 0, 0, .05)"
          style={[HorizontalCardstyles.cardContainer,{
            borderRadius:wp(15)
            }]} onPress={props.onpressnav}>
      <View style={[HorizontalCardstyles.cardContainer,{backgroundColor:props.color}]}>
        <Image style={HorizontalCardstyles.imageStyle} source={props.bgimage} 
        resizeMode={'cover'}
        />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:wp(2),
    marginTop:hp(1),paddingBottom:hp(4),
    }}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
        <Image style={{height:hp(6),width:wp(12),borderRadius:wp(3)}} source={props.logoimage} />
        <View style={HorizontalCardstyles.infoStyle}>
          <Text style={HorizontalCardstyles.titleStyle}>{props.title}</Text>
          <Text style={HorizontalCardstyles.categoryStyle}>{props.description}</Text>
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

  );
};



export default HorizontalPosterCard;