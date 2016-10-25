import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Page } from 'HackerNews/src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Infos = () => (
  <Page noMargin={true}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        About HackerNews
      </Text>
      <Text style={styles.instructions}>
        Version 0.0.1 (@elarasu HackerNews)
      </Text>
      <Text style={styles.instructions}>
        https://github.com/elarasu/HackerNews, use this to learn/fork react-native, graphql
      </Text>
    </View>
  </Page>
);

export default Infos;
