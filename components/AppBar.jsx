import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBarPrimary,
    alignItems:'baseline',
    flexDirection:'row',
    flexWrap:'wrap',
    height:Constants.statusBarHeight + 50

  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  }
  // ...
});

const AppBar = ({children}) => {

  return (
  <View style={styles.container}>
<ScrollView horizontal>
<TouchableWithoutFeedback><View style={{flexDirection:'row'}}>{children}</View></TouchableWithoutFeedback>
</ScrollView>
  </View>
  );
};

export default AppBar;

