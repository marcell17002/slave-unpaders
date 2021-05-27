import React, {useState, useEffect} from 'react';
import Router from './router';
import {StyleSheet, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './services/redux/store';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
