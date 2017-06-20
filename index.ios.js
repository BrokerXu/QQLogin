/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginView from './LoginView';

export default class QQLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('QQLogin', () => QQLogin);
