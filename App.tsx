import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from "react-navigation";
import {Provider} from "react-redux";
import configureStore from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
        <Provider store={configureStore().store} >
          <PersistGate loading={null} persistor={configureStore().persistor}>
            <View style={styles.container}>
              <Text>star1t</Text>
              <StatusBar style="auto" />
            </View>
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
