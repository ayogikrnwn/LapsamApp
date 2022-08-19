import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APIUrl, APIUrl1, APIUrl3 } from "../config/APIUrl";
import { setDataUser, setDummySampah, setListSampah } from "../redux/reducers";
export const asyncStoreData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};
export const asyncGetData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const asyncRemoveData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? await AsyncStorage.removeItem(key) : null;
  } catch (e) {
    // error reading value
  }
};

export const fetchLogin = ({ body, role }) => {
  return new Promise(async (resolve, reject) => {
    await axios({
      url: `${APIUrl}/${role || "masyarakat"}/login`,
      method: "POST",
      data: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const getAllMasyarakat = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${APIUrl}/masyarakat`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const registerMasyarakat = ({ body }) => {
  return new Promise(async (resolve, reject) => {
    await axios({
      url: `${APIUrl}/masyarakat`,
      method: "POST",
      data: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const inputSampah = ({ body }) => {
  return new Promise(async (resolve, reject) => {
    // axios
    //   .post(`${APIUrl1}/sampah`, body, {
    //     headers: {
    //       Accept: "*/*",
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     resolve(res);
    //   })
    //   .catch((err) => {
    //     reject(err);
    //   });
    await axios({
      url: `${APIUrl1}/sampah`,
      method: "POST",
      data: body,
      headers: {
        // Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const getListSampah = () => {
  return new Promise(async (resolve, reject) => {
    await axios({
      url: `${APIUrl1}/sampah`,
      method: "GET",
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const getListJadwal = () => {
  return new Promise(async (resolve, reject) => {
    await axios({
      url: `${APIUrl3}/jadwal`,
      method: "GET",
    })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const addPoint = ({ dataUser, dispatch }) => {
  return new Promise(async (resolve, reject) => {
    if (dataUser && dispatch) {
      let newState = await asyncGetData("userRegister");

      let elementIndex = newState.findIndex(
        (obj) => obj.id_masy === dataUser.id_masy
      );

      console.log("newState", elementIndex, dataUser.id_masy);
      newState[elementIndex].point += 1000;

      console.log("newState", newState[elementIndex]);

      dispatch(setDataUser(newState[elementIndex]));
      await asyncStoreData(asyncDataUser, newState[elementIndex]);
      await asyncStoreData("userRegister", newState);
      resolve(newState[elementIndex]);
    } else {
      reject({
        message: "sertakan dataUser & dispatch",
      });
    }
  });

  // console.log("store", state.data.image);
};

export const removeSampah = ({ dataSampah, dispatch }) => {
  return new Promise(async (resolve, reject) => {
    if (dataSampah && dispatch) {
      let newState = await asyncGetData(listDummySampah);

      let elementRemoved = newState.filter((data) => {
        return data.id_sampah !== dataSampah.id_sampah;
      });

      console.log("elementRemoved", elementRemoved, dataSampah.id_sampah);

      dispatch(setDummySampah(elementRemoved));
      let removeDummy = await asyncStoreData(listDummySampah, elementRemoved);
      resolve(removeDummy);
    } else {
      reject({
        message: "sertakan dataUser & dispatch",
      });
    }
  });

  // console.log("store", state.data.image);
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const asyncDataUser = "data-user";
export const listDummySampah = "listDummySampah";

export const clearStorage = async () => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getAllKeys()
        .then((keys) => {
          AsyncStorage.multiRemove(keys);
        })
        .then((res) => {
          resolve(res);
          console.log("success clear storage");
        })
        .catch((err) => {
          reject(err);
          console.log("failed clear storage");
        });

      // let clear = await AsyncStorage.clear();
      return clear;
    } catch (e) {
      reject(e);
      // error reading value
    }
  });
};
