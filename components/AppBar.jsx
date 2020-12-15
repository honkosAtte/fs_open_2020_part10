import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBarPrimary,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  }
  // ...
});

const AppBar = ({text}) => {
  return <TouchableWithoutFeedback><View  style={styles.container}><Text style={styles.text}>{text}</Text></View ></TouchableWithoutFeedback>;
};

export default AppBar;