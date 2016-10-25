import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Page } from 'HackerNews/src/components';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import NewsList from './news';


const networkInterface = createNetworkInterface('https://www.graphqlhub.com/graphql');
client = new ApolloClient({
  networkInterface,
  //dataIdFromObject: r => r.id,
});

class Home extends Component {  
  render() {
    return (
      <Page noMargin={true}>
          <ApolloProvider client={client}>
            <NewsList/>
          </ApolloProvider>
      </Page>

    );
  }

}

export default Home;
