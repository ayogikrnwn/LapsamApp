import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Camera } from "react-native-vision-camera";
import { useCameraDevices } from "react-native-vision-camera";

import { decrement, increment } from "../redux/reducers";
import { useSelector, useDispatch } from "react-redux";

const CameraPage = ({ route, navigation }) => {
  const [loadTakePicture, setLoadTakePicture] = useState(false);

  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("count", count);
  }, []);

  // const newCameraPermission = await Camera.requestCameraPermission()

  const refCamera = useRef();
  const requestPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission == "denied") {
      alert("Silahkan Aktifkan Akses Kamera");
      Linking.openSettings();
    } else {
      console.log("cmr", cameraPermission);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  // console.log("device", device);

  const photo = async () => {
    setLoadTakePicture(true);
    const take = await refCamera.current.takePhoto({
      flash: "on",
    });
    console.log("take", take);
    setLoadTakePicture(false);

    // navigation.setParams({
    //   query: "someText",
    // });

    // console.log("navigation.state.params", route.params.setImage());

    navigation.goBack();
    route.params.setImage(path);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {device !== undefined ? (
        <>
          {/* <View style={{ height: 500 }}> */}
          <Camera
            ref={refCamera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          {/* </View> */}
          <TouchableOpacity
            onPress={() => {
              photo();
            }}
            disabled={loadTakePicture}
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              backgroundColor: "#fff",
              borderRadius: 50,
              position: "absolute",
              bottom: 0,
              marginBottom: 20,
            }}
          >
            <Text>{loadTakePicture ? "load.." : "take"}</Text>
            {/* <Icon name={"chevron-right"} size={30} color="#01a699" /> */}
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({});
