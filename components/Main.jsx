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
        <AppBar><Link to="/">
           <Text style={{color:'white', fontSize:20, paddingLeft:10}}>Repositories</Text>
        </Link>
        <Link to="/signing">
           <Text style={{color:'white', fontSize:20, paddingLeft:10}}>SignIn</Text>
        </Link>   
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <RepositoryList/>
          </Route>
          <Route path="/signing" exact>
            <SignIn/>
          </Route>
          <Redirect to="/"/>
        </Switch>

    </View>
  );
};

export default Main;

