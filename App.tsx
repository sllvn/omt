/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Text>hello world</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
