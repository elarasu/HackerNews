import React, { Component, PropTypes } from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import { Actions } from 'react-native-router-flux';
import { Page } from 'HackerNews/src/components';

import {
    Image,
    ListView,
    Row,
    View,
    Divider,
    Title,
    Subtitle,
    TouchableOpacity,
    Text,
    Screen,
    Caption, Button, Icon
} from '@shoutem/ui';


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

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
class NewsList extends Component {
    renderRow(news) {
        return (
            <TouchableOpacity onPress={() => {
                if (news.url) {
                    Actions.article({ data: news });
                }
            } }>
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
                <ListView
                    loading={this.props.loading}
                    data={this.props.articles}
                    renderRow={news => this.renderRow(news)}
                    />
            );
        }
}

NewsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array,
    refresh: PropTypes.func,
};

const HN_QUERY = gql`
      {
        hn {
          topStories {
            id
            title
            type
            by { id }
            time
            score
            descendants
            url
          }
        }
      }
`;

const hNewsGraphQuery = graphql(HN_QUERY, {
    props: ({ ownProps, data: { loading, hn, refetch}}) => ({
        loading: loading,
        articles: loading ? [] : hn.topStories,
        refresh: refetch,
    }),
})(NewsList);
export default hNewsGraphQuery;
