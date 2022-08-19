import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APIUrl, APIUrl1, APIUrl3 } from "../config/APIUrl";
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

export const asyncDataUser = "data-user";
export const listDummySampah = "listDummySampah";
