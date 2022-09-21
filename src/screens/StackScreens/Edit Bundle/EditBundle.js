import React, {useState,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';


import CustomHeader from '../../../components/CustomHeader/CustomHeader';

import { appImages } from '../../../constant/images';
import LottieModal from '../../../components/LottieModal/LottieModal';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import RBSheet from "react-native-raw-bottom-sheet";

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Notifications } from '../../../model/Notifications';

import styles from './styles';

const EditBundle = ({navigation}) => {

      //Modal States
      const [modalVisible, setModalVisible] = useState(false);

                    //camera state and funnction
                    const refRBSheet = useRef();

  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
      logo:NotificationItem.logo
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const onLeftActionStatusChange = rowKey => {
    console.log('onLeftActionStatusChange', rowKey);
  };

  const onRightActionStatusChange = rowKey => {
    console.log('onRightActionStatusChange', rowKey);
  };

  const onRightAction = rowKey => {
    console.log('onRightAction', rowKey);
  };


  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View
        style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          onPress={() => console.log('Element touched')}
          underlayColor={'#aaa'}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image
                 source={data.item.logo}
                    style={{height:hp(10),width:wp(20),borderRadius:data.item.logo === 25 || data.item.logo ===27 ?wp(0):wp(5)}}
                    resizeMode='contain'
                />
                <View style={{marginLeft:wp(3)}}>
                <Text style={styles.title} >
              {data.item.title}
            </Text>
            <Text style={styles.details} >
              {data.item.details}
            </Text>
                </View>
  

          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
      console.log(' data here',data)
    const rowHeightAnimatedValue = new Animated.Value(80);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                //flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={()=> refRBSheet.current.open()}>
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
         <Text style={styles.remove} numberOfLines={1}>
         REMOVE
            </Text>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(95);
    const rowHeightAnimatedValue = new Animated.Value(83);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
    <View style={styles.container}>
      <View style={{marginBottom:hp(3)}}>
      <CustomHeader
        screentitle={'Edit Bundle'}
        navigation={() => navigation.goBack()}
      /> 
      </View>


<View style={{}}>
<SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        //leftOpenValue={75}
        rightOpenValue={-210}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        //leftActivationValue={100}
        rightActivationValue={-200}
        //leftActionValue={0}
        rightActionValue={-500}
        //onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
        // showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
      />
</View>

        <RBSheet
        ref={refRBSheet}
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
            height: hp(25)
        }
        }}
      >
     <View style={{justifyContent:'center',alignItems:'center'
    }}>
     <Text style={styles.btmmaintext}>Are you sure you want to remove
from bundle?</Text>

     </View>   

          <View style={styles.btnview}>
                <TouchableOpacity onPress={()=>{setModalVisible(true),     setTimeout(() => {
                            setModalVisible(false) // Stack Name
                          }, 3000)}}>
                <View style={[styles.btmbtn,{backgroundColor:'white'}]}>
                        <Text style={[styles.btmbtntext,{color:'blue'}]}>
                            Yes</Text>
                        </View>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>{refRBSheet.current.close()}}>
                <View style={styles.btmbtn}>
                        <Text style={styles.btmbtntext}>
                            No</Text>
                        </View>
              </TouchableOpacity >

          </View>
      </RBSheet>
      <LottieModal
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
              text={'Password Updated'}
          buttontext={'Done'}
 onPress={()=> {setModalVisible(false)}}
                />
    </View>
    </ScrollView>
  );
};

export default EditBundle;

