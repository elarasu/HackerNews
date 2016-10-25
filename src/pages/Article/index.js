import { Page } from 'HackerNews/src/components';
import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    WebView,
    View
} from 'react-native';

var DEFAULT_URL = 'https://news.ycombinator.com/';
var BGWASH = 'rgba(255,255,255,0.8)';

const styles = StyleSheet.create({
    webView: {
        backgroundColor: BGWASH,
        marginTop: 2
    }
});

class ArticleView extends Component {
    state = {
        url: DEFAULT_URL,
        scalesPageToFit: false,
    };

    render() {
        return (
            <Page noMargin={true}>
                <WebView
                    source={{ uri: this.props.data.url }}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}
                    />
            </Page>
        );
    }
}

export default ArticleView;