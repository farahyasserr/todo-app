import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listContentContainer: {
    paddingVertical: 24,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
