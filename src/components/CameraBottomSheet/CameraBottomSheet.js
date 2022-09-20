import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const CamerBottomSheet = (props) => {
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
            backgroundColor: "grey"
          },
          container: {
         borderTopLeftRadius:wp(5),
         borderTopRightRadius:wp(5),
            height: hp(30)
        }
        }}
      >
     <View style={{flexDirection:'row', justifyContent:"space-between",
     marginVertical:10, marginHorizontal:wp(5),marginBottom:hp(3)
    }}>
     <Text style={styles.maintext}>Upload Image</Text>
     <Ionicons name="close-circle" size={25} color={"#BCBCBC"}  
     onPress={() =>  props.refRBSheet.current.close()}/>
     </View>   

          <View style={{justifyContent:'center',width:wp(90)}}>
            <TouchableOpacity onPress={props.takePhotoFromCamera} style={styles.modaltextview}>
          <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Ionicons name="camera" size={20} color={"#B4B4B4"} />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
      <Text style={styles.Subscriptiontext}>Pick From Camera</Text>
          </View>
      </View>
      </TouchableOpacity>
      <View style={styles.borderview}></View>
      <TouchableOpacity  onPress={props.choosePhotoFromLibrary}>
      <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Ionicons name="image-sharp" size={20} color={"#B4B4B4"} />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
    
      <Text style={styles.Subscriptiontext}>Pick From Gallery</Text>
          </View>
      </View>
      </TouchableOpacity>
          </View>
      </RBSheet>
    )
};

export default CamerBottomSheet;