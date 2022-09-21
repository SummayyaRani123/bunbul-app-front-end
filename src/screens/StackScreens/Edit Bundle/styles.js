import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';

import { fontFamily } from '../../../constant/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal:wp(4)
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        //backgroundColor: '#FFF',
        borderRadius: 5,
        height: hp(14),
        margin: hp(0),
        marginBottom:hp(6),
        //marginHorizontal:wp(2),
        // shadowColor: '#999',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: hp(14),
   
        //marginBottom:hp(5),
    },
    rowBack: {
        //alignItems: 'center',
        backgroundColor: '#fff',
        // /flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingLeft:0,
        top: 20,
        marginTop: 0,
        marginRight: 8,
        marginLeft: 8,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        // height: 80,
        // height: 80,
        //marginBottom: 0,
        //borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width:wp(50),
        paddingRight: 47,
        paddingBottom: 10
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },

    title: {
        fontSize: hp(2.5),
    fontFamily:fontFamily.Poppins_Medium,
        marginBottom: hp(0),
        color: 'black',
    },
    details: {
        fontSize: hp(1.7),
    fontFamily:fontFamily.Poppins_Regular,
        color: 'black',
        width:wp(70)
    },
    remove: {
        fontSize: 15,
        marginTop: hp(0.6),
        color: 'white',
        width: 80,
        fontWeight: 'bold'
    },
    btmmaintext: {
        fontSize: hp(2),
        marginTop: hp(0.6),
        color: Colors.Appthemecolor,
        width: wp(70),
        fontFamily: fontFamily.Poppins_Medium,
        textAlign: 'center'
    },
    btnview:
    {
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:wp(12),
        marginVertical:hp(3)
    },
    btmbtn: {
        backgroundColor: Colors.Appthemecolor,
        borderColor:Colors.Appthemecolor,
        borderWidth:1.5,
        alignItems: 'center',
         height: wp(10), 
        justifyContent: 'center',
        borderRadius: 20,
        width: wp(35)
    },
    btmbtntext:
        {
             color: 'white', 
        fontWeight: "800", 
        fontSize: hp('1.6%')
     },

});
export default styles;
