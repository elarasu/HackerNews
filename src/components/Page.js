import React, { PropTypes } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import appStyle from 'HackerNews/src/appStyle';
import bgimage from 'HackerNews/src/assets/background.png';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});

const Page = props => (
  <View
    style={[styles.page, {
      paddingTop: props.noNavBar ? 0 : appStyle.navbar.height,
      paddingHorizontal: props.noMargin ? 0 : appStyle.margins.outer,
      backgroundColor: props.backgroundColor,
    }]}
    >
    <Image source={bgimage} style={styles.image}>
      {props.children}
    </Image>
  </View>
);

Page.propTypes = {
  children: PropTypes.node,
  noMargin: PropTypes.bool,
  noNavBar: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Page.defaultProps = {
  noMargin: false,
  noNavBar: false,
  backgroundColor: appStyle.colors.color,
};

export default Page;
