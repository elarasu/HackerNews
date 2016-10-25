import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import logo from 'HackerNews/src/assets/logo.png';
import appStyle from 'HackerNews/src/appStyle';
import {
  Title,
} from '@shoutem/ui';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: appStyle.navbar.offset,
  },
  image: {
    height: appStyle.navbar.baseHeight - 8,
    resizeMode: 'contain',
  },
});

const LogoTitle = () => (
  <View style={styles.container}>
    <Title style={{marginTop:7}}>HackerNews</Title>
  </View>
);

export default LogoTitle;
