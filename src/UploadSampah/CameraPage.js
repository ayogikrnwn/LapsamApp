import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Camera } from "react-native-vision-camera";
import { useCameraDevices } from "react-native-vision-camera";

import { useDispatch } from "react-redux";
import { setImage } from "../redux/reducers";

const CameraPage = ({ route, navigation }) => {
  const [loadTakePicture, setLoadTakePicture] = useState(false);

  const [images, setImages] = useState(false);

  const dispatch = useDispatch();

  // const newCameraPermission = await Camera.requestCameraPermission()

  const refCamera = useRef();
  const requestPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission == "denied") {
      alert("Silahkan Aktifkan Akses Kamera");
      Linking.openSettings();
    } else {
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
    const take = await refCamera.current.takePhoto({});
    setLoadTakePicture(false);

    setImages(take);

    dispatch(setImage(take));

    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {images ? (
        <Image
          source={{
            uri: "file://" + images.path,
          }}
          style={{
            height: 500,
            width: 250,
            backgroundColor: "lightblue",
          }}
        />
      ) : (
        <>
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
                {/* <Text>{loadTakePicture ? "load.." : "take"}</Text> */}
                {/* <Icon name={"chevron-right"} size={30} color="#01a699" /> */}
              </TouchableOpacity>
            </>
          ) : (
            <ActivityIndicator size="large" color="black" />
          )}
        </>
      )}
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({});
