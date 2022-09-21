import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white'
  },
  toptext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(3),
  },
  lasttext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_SemiBold,
    fontSize: hp(1.6),
  },

  usertext:
  {
    color: '#707070',
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(2),
  },

  underuserviewtext:
  {
    color:Colors.Appthemecolor,
fontFamily:fontFamily.Poppins_Medium,
    fontSize: hp(1.7),
    marginTop:hp(2)
  },
  maincontainer:
  {
    flexDirection:"row",
    justifyContent:'space-between',
    marginTop:hp(2),
    width:wp(76)
        },
        optiontext:
        {
          color: '#707070',
      fontFamily:fontFamily.Poppins_Medium,
          fontSize: hp(1.7),
        },
    borderview:
    {
        borderBottomColor:'rgba(112,112,112,0.2)',
        borderBottomWidth:2,
        width:wp(78),
        marginTop:hp(1.8),
        marginBottom:hp(2)
      },
  inputview:
  {
 height:hp(27),
    width: wp('90%'),
    alignSelf: 'center',
    alignItems:'center',
    borderRadius:wp(5),
    backgroundColor:'white',
    padding:wp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 5,
marginTop:hp(5)
    //backgroundColor: "red",
  },

});
export default styles;
