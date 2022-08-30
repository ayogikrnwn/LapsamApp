/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";

import store from "./redux/store";
import { Provider } from "react-redux";
import { clearStorage } from "./utils";

const App = () => {
  LogBox.ignoreAllLogs(true);
  React.useEffect(() => {
    // clearStorage()
  }, []);
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
