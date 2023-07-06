import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDatainLocalStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

const getDataFromLocalStorage = async (key: string) => {

  const value = await AsyncStorage.getItem(key);
  return value as any
};

export { storeDatainLocalStorage, getDataFromLocalStorage }