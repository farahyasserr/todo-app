import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listContentContainer: {
    paddingVertical: 24,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.lightBlue,
  },
});
