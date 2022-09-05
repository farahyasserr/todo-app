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
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 15,
    maxWidth: '80%',
  },
  doneText: {
    color: colors.textGrey,
    textDecorationLine: 'line-through',
    fontSize: 15,
    maxWidth: '80%',
  },
  deleteIcon: {
    height: 24,
    width: 24,
  },
  doneIcon: {
    height: 20,
    width: 20,
    marginEnd: 8,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
