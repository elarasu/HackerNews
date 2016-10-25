import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Page, Button } from 'HackerNews/src/components';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Proverb from './proverb';

const networkInterface = createNetworkInterface('https://www.graphqlhub.com/graphql');
client = new ApolloClient({
  networkInterface,
  //dataIdFromObject: r => r.id,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = () => (
  <Page noMargin={true}>
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <Proverb />
      </ApolloProvider>
    </View>
  </Page>
);

export default Home;
