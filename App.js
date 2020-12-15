import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableWithoutFeedback, Alert} from 'react-native';
import RepositoryList from './components/RepositoryList';

export default function App() {

console.log('terve');
  return (
    <View style={styles.container}>
     {/* <Text>Open up App.js to stop doing  on your app!</Text>
     <TouchableWithoutFeedback
      onPress={() => Alert.alert('You pressed the text!')}

    >
      <Text>You can press me</Text>
 
    </TouchableWithoutFeedback>
      <StatusBar style="auto" /> */}
      <RepositoryList/>
    </View>
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
