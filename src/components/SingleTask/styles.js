import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black,
    fontWeight: '500',
  },
  doneText: {
    color: colors.textGrey,
    textDecorationLine: 'line-through',
  },
  deleteIcon: {
    height: 20,
    width: 20,
  },
  doneIcon: {
    height: 20,
    width: 20,
    marginEnd: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});
