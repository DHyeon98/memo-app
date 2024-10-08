import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw e;
  }
};

export const getItem = async (key: string) => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res;
  } catch (e) {
    throw new Error();
  }
};

export const removeItem = async (key: string) => {
  try {
    const res = await AsyncStorage.removeItem(key);
    return res;
  } catch (e) {
    throw e;
  }
};
