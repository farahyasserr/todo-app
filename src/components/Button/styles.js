import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
export default StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 21,
    lineHeight: 50,
  },
});
