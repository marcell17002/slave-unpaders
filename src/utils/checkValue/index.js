import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const checkValue = (value, key) => {
  if (value === '') {
    showMessage({
      message: `${key} tidak boleh kosong`,
      type: 'warning',
      color: colors.text.white,
    });
  }
};
