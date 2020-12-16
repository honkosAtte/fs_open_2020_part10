import React from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import { Route, Switch, Redirect, Link } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar text='Repositories' /> 
        <Switch>
          <Route path="/" exact>
            <RepositoryList/>
          </Route>
          <Route path="/signing" exact>
            <SignIn/>
          </Route>
          <Redirect to="/"/>
        </Switch>
        <Link to="/signing">
           <Text>SignIn</Text>
        </Link>
        <Link to="/">
           <Text>Repositories</Text>
        </Link>


    </View>
  );
};

export default Main;

