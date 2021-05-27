import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    //saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    //error reading value
  }
};

export const updateToken = async (key, token) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      var data = value;
      data = {
        ...value,
        token: token,
      };
      await storeData(key, data);
    }
  } catch (e) {
    //error reading value
  }
};

export const destroyData = () => {
  try {
    AsyncStorage.clear();
  } catch (e) {
    //error reading value
  }
};
