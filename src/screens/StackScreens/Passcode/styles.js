import {StyleSheet, Platform} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  import { fontFamily } from '../../../constant/fonts';

export const CELL_SIZE = hp(3.2);
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = 'grey';
export const ACTIVE_CELL_BG_COLOR = '#fff';

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    paddingHorizontal: wp(10),
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal:wp(1),
    height:CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 1,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize:hp(3),
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: 'grey',
  },

  // =======================

  root: {
   flex:1,
    backgroundColor:'white'
  },

  subTitle: {
fontSize:hp(1.8),
fontFamily:fontFamily.Poppins_Medium,
    paddingTop:hp(3.5),
    color: '#D7D7D7',
    textAlign: 'center',
  },

});

export default styles;