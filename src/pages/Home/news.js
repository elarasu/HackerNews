import React, { Component, PropTypes } from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outer: { paddingTop: 32, paddingLeft: 10, paddingRight: 10 },
    header: { fontSize: 17, marginBottom: 15 },
};

import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Page } from 'HackerNews/src/components';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
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
            <TouchableOpacity onPress={() => {
                alert(news.url);
                Actions.article({ data: news });
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
                data={this.getNews()}
                renderRow={news => this.renderRow(news)}
                />
        );
    }
}

NewsList.propTypes = {
    onButtonPress: React.PropTypes.func,
    //     loading: PropTypes.bool.isRequired,
    //     proverb: PropTypes.string,
    //     refresh: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    onButtonPress: (newsItem) => {
        //dispatch(navigatePush({ key: 'RestaurantDetails', title: 'Details' }, { restaurant }));
        alert(newsItem);
    },
});


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

const hNewsGraphQuery = graphql(HN_QUERY)(NewsList);

//export default hNewsGraphQuery;
export default NewsList;
// export default connect(
// 	undefined,
// 	mapDispatchToProps
// )(RestaurantsList);

