import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const notifications = (type, message) => {
  if (type === 'success') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  } else if (type === 'warning') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  } else if (type === 'danger') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  } else if (type === 'info') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  } else {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  }
};
