import AsyncStorage from "@react-native-async-storage/async-storage";

type StoreDataProps = {
    key: string;
    value: string;
}

type GetDataProps = {
    key: string;
}

type GeRemoveDataProps = {
    key: string;
}

const storeData = async ({key,value}:StoreDataProps) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
};

const getData = async ({key}:GetDataProps) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
       return value;
      }
    } catch (e) {
      // error reading value
    }
};

const removeData = async ({ key }: GeRemoveDataProps) => {
    try {
        const value = await AsyncStorage.removeItem(key);
    } catch (e) {
        // error reading value
    }
};

export default {
    storeData,
    getData,
    removeData
}
