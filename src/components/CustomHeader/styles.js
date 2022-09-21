import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../utills/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../constant/fonts';

const styles = StyleSheet.create({

  topview:
{
  flexDirection:'row',
justifyContent:'space-between',
          alignItems:'center',
          marginTop:wp(15),
          marginHorizontal:wp(5)
        },
        maintext:
        {
          color: '#313131',
          fontFamily:fontFamily.Poppins_Medium,
          fontSize: hp(2.7),
        },
        backicon:
        { 
            width: wp(6),
             height: hp(2.7)
            },
            searchicon:
            { 
                width: wp(5),
                 height: hp(5)
                }

});
export default styles;
