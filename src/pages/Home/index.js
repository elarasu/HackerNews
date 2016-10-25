import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Page } from 'HackerNews/src/components';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Proverb from './proverb';
import { ScrollView } from 'react-native';

import {
  Image,
  ListView,
  Row,
  View,
  Divider,
  Title,
  Subtitle,
  TouchableOpacity,
  NavigationBar,
  Text,
  Screen,
  Caption, Button, Icon
} from '@shoutem/ui';


const networkInterface = createNetworkInterface('https://www.graphqlhub.com/graphql');
client = new ApolloClient({
  networkInterface,
  //dataIdFromObject: r => r.id,
});


function NavBarStageContainer(props) {
  return (
    <View
      {...props}
      style={{
        width: window.width,
        height: 70,
        ...props.style,
      }}
      />
  );
}

function timeSince(date) {
  date = date * 1000;
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  getNews() {
    return require('../../../topstories.json');
  }

  renderRow(news) {
    const { onButtonPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onButtonPress(news)}>
        <View style={{ margin: 10 }}>
          <Subtitle>{news.title}</Subtitle>
          <View styleName="horizontal space-between">
            <Caption>{news.by.id}, +{news.descendants}, *{news.score}</Caption>
            <Caption>{timeSince(news.time)}</Caption>
          </View>
        </View>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Page noMargin={true}>
          <ApolloProvider client={client}>
            <ListView
              data={this.getNews()}
              renderRow={news => this.renderRow(news)}
              />
          </ApolloProvider>
      </Page>

    );
  }

}

export default NewsList;
