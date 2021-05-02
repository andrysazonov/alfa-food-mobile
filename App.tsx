import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./src/navigation/Navigator/AppNavigator"
import store, {persistor} from "./src/redux/store";

export default function App() {
  return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
