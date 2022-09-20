import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';

/////////////////app components///////////
import BadgeView from '../BadgeView/BadgeView';

//////////////app pakages///////////////////
import { TouchableRipple } from 'react-native-paper';

////////////////app images////////////////
import { appImages } from '../../constant/images';

/////////////app styles//////////////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import VerticalCardstyles from './styles/VerticalCardstyle';


const VerticalPosterCard = (props) => {

  return (
                 <TouchableRipple
            style={[VerticalCardstyles.cardContainer,{borderRadius:wp(5)}]}
            rippleColor="rgba(0, 0, 0, .01)"
            onPress={props.onpressnav}>
      <View style={[VerticalCardstyles.cardContainer,{backgroundColor:props.color}]}>
        <Image style={VerticalCardstyles.imageStyle} source={props.bgimage} 
        resizeMode={'cover'}
        />
        <View style={{marginHorizontal:wp(1),
    }}>
        <View style={{width:wp(45),flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
        <Image style={{height:hp(6),width:wp(12),borderRadius:wp(3)}} source={props.logoimage} />
        <View style={VerticalCardstyles.infoStyle}>
          <Text style={VerticalCardstyles.titleStyle}>{props.title}</Text>
          <Text style={VerticalCardstyles.categoryStyle}>{props.description}</Text>
        </View>
        </View>
        <View style={{marginBottom:hp(2),
    marginTop:hp(1),alignItems:"center",justifyContent:"center"
    }}>
        <TouchableOpacity onPress={()=>{}}>
              <BadgeView
             title={'Subscribe'}
             width={'35%'}
             state={'white'}
               />
              </TouchableOpacity >
              </View>
        </View>
      </View>
   </TouchableRipple>

  );
};



export default VerticalPosterCard;