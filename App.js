/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  LogBox,
  View,
  StatusBar,
} from 'react-native';
import { Container, Text } from 'native-base';
import Chat from './src/screen/Chat';
import Login from './src/screen/Login';

LogBox.ignoreLogs(["Setting a timer", "Remote debugger"])
export default function App(){
  const [userName, setUserName] = useState(null);

  return(

    <Container  style={styles.container}> 
      <SafeAreaView>
        { !userName ? (
          <Login setUserName={setUserName} />
        ) : (
          <Chat userName={userName} />
        )}
      </SafeAreaView>
    </Container>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#16202b'
  }
})