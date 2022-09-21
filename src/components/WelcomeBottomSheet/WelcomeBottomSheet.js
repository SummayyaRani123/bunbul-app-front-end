import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import CustomButtonhere from '../Button/CustomButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

import Lottie from 'lottie-react-native';

const WelcomeBottomSheet = (props) => {
    return(
      
  <RBSheet
        ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: "white"
          },
          container: {
         borderTopLeftRadius:wp(5),
         borderTopRightRadius:wp(5),
            height: hp(45)
        }
        }}
      >
     <View style={{justifyContent:'center',alignItems:'center',
     marginVertical:10, marginHorizontal:wp(5),marginBottom:hp(3)
    }}>

<Lottie source={require('./BTMCheck.json')}  autoPlay style={styles.animatedIcon}/>
     <Text style={styles.maintext}>Welcome Onboard</Text>
     <View style={{marginTop:hp(2)}}></View>
     <Text style={styles.subtext}>Connect your Bank Account</Text>
     </View>   

      <View style={{alignItems:'center'}}>
      <TouchableOpacity  onPress={props.onpress}
       style={styles.modaltextview}
      >
      <Text style={styles.Subscriptiontext}>Connect</Text>
 
      </TouchableOpacity>
          </View>
              <TouchableOpacity  onPress={props.onpress}
     style={{justifyContent:'center',alignItems:'center',
     marginVertical:10, marginHorizontal:wp(5),marginBottom:hp(3)
    }}
      >
                 <Text style={styles.subtext}>Skip</Text>
      </TouchableOpacity>
   
  
      </RBSheet>
    )
};

export default WelcomeBottomSheet;