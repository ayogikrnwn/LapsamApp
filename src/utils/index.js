import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APIUrl, APIUrl1, APIUrl3 } from "../config/APIUrl";
import {
  setDataUser,
  setDummySampah,
  setListSampah,
  setPayRedeem,
  setRedemPoint,
} from "../redux/reducers";
import { strings } from "./strings";
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

export const addPoint = ({ dataUser, dispatch, resetPoint, jumlah }) => {
  return new Promise(async (resolve, reject) => {
    if (dataUser && dispatch) {
      let newState = await asyncGetData("userRegister");

      let elementIndex = newState.findIndex(
        (obj) => obj.id_masy === dataUser.id_masy
      );

      if (resetPoint) {
        newState[elementIndex].point = 0;
        await asyncStoreData(asyncDataUser, newState[elementIndex]);
        await asyncStoreData("userRegister", newState);
      } else {
        if (jumlah) {
          newState[elementIndex].point = jumlah;
        } else {
          newState[elementIndex].point += 1000;
        }
        dispatch(setDataUser(newState[elementIndex]));
        await asyncStoreData(asyncDataUser, newState[elementIndex]);
        await asyncStoreData("userRegister", newState);
      }

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

export const redemPoint = ({ dispatch, selector }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { redemPoint, dataUser } = selector;
      const { point, id_masy } = dataUser;
      let body = [...redemPoint, { id_masy, point }];
      let store = await asyncStoreData("redemPoint", body);
      dispatch(setRedemPoint(body));
      resolve(store);
    } catch (err) {
      reject(err);
    }
  });
};

export const getMyProgressRedemPoint = ({ selector }) => {
  return new Promise((resolve, reject) => {
    try {
      const { redemPoint, dataUser } = selector;
      const { id_masy } = dataUser;
      let find = redemPoint.find((data) => data.id_masy === id_masy);
      resolve(find);
    } catch (err) {
      reject(reject);
    }
  });
};

export const payRedeem = async ({ dataReedem, dispatch, selector }) => {
  let idPay = Math.random() * 23432;
  const data = await asyncGetData(strings.payRedeem);
  delete dataReedem.data;
  let newData = {
    ...dataReedem,
    idPay,
    created_at: new Date().toString(),
    reedemPorccess: 2,
  };
  addPoint({ dataUser: dataReedem, dispatch: dispatch, resetPoint: true });

  removeProgressRedemPoint({ dispatch, dataUser: dataReedem, selector }).then(
    async (res) => {
      let body = data !== null ? [...data, newData] : [newData];
      asyncStoreData(strings.payRedeem, body)
        .then((storePayRedeem) => {
          dispatch(setPayRedeem(body));
        })
        .catch((err) => {
          // console.log("failed");
        });
    }
  );
};

export const removeProgressRedemPoint = ({ selector, dispatch, dataUser }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { redemPoint } = selector;
      const { id_masy } = dataUser;
      let filter = redemPoint.filter((data) => data.id_masy !== id_masy);
      if (filter) {
        await asyncStoreData("redemPoint", filter);
        dispatch(setRedemPoint(filter));
        resolve(filter);
      } else {
        resolve(filter);
      }
    } catch (err) {
      reject(reject);
    }
  });
};

export const getListIuran = async ({
  selector,
  user,
  setListTerimaRedemPoint,
  setListRedemPoint,
  setListDoneRedemPoint,
}) => {
  let listDone = [];
  let done = await asyncGetData(strings.payRedeem);

  if (done !== null && typeof done === "object") {
    const unique = [...new Map(done.map((m) => [m.id_masy, m])).values()];
    listDone = unique
      .filter((data) => {
        if (
          new Date(data.created_at).getMonth() + 1 ===
          new Date().getMonth() + 1
        ) {
          return data.id_masy;
        }
      })
      .map((data) => data.id_masy);
  }

  if (setListDoneRedemPoint) {
    setListDoneRedemPoint(done);
  }
  if (selector.redemPoint.length > 0) {
    let userReedem = [];
    const newRedemPoint = selector.redemPoint.map((data) => {
      userReedem.push(data.id_masy);
      return { ...user.find((fnd) => fnd.id_masy === data.id_masy), data };
    });
    let filter = user.filter(
      (data) => !userReedem.includes(data.id_masy) && data.id_masy
    );
    let filterUser = filter.filter((data) => !listDone.includes(data.id_masy));
    await setListTerimaRedemPoint(newRedemPoint);
    await setListRedemPoint(filterUser);
  } else {
    let filter = user.filter((data) => data.id_masy);
    let filterUser = filter.filter((data) => !listDone.includes(data.id_masy));
    await setListRedemPoint(filterUser);
  }
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
        })
        .catch((err) => {
          reject(err);
        });

      // let clear = await AsyncStorage.clear();
      return clear;
    } catch (e) {
      reject(e);
      // error reading value
    }
  });
};
