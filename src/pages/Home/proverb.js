import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native'
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

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
class Proverb extends Component {
    render() {
        return (
            <Text style={styles.header}>Hello</Text>
        );
    }
}

Proverb.propTypes = {
    loading: PropTypes.bool.isRequired,
    proverb: PropTypes.string,
    refresh: PropTypes.func,
};

const PROVERB_QUERY = gql`
      {
        hn {
          topStories {
            title
            id
            score
            descendants
          }
        }
      }
`;

const proverbQuery = graphql(PROVERB_QUERY)(Proverb);

export default proverbQuery;
