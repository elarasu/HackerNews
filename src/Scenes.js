import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';

import * as Pages from 'HackerNews/src/pages';
import { LogoTitle } from 'HackerNews/src/components';
import backChevron from 'HackerNews/src/assets/back_chevron.png';

import appStyle from 'HackerNews/src/appStyle';

const styles = StyleSheet.create({
  header: {
    backgroundColor: appStyle.colors.primary,
    borderBottomWidth: 0,
  },
  title: {
    color: appStyle.colors.lightText,
  },
});

const Scenes = () => (
  <Router>
    <Scene
      key="root"
      titleStyle={styles.title}
      navigationBarStyle={styles.header}
      backButtonImage={backChevron}
      >
      <Scene
        key="home"
        type={ActionConst.RESET}
        component={Pages.Home}
        renderTitle={LogoTitle}
        onRight={() => Actions.infos()}
        rightButtonTextStyle={styles.title}
        rightTitle="About"
        initial
        />
      <Scene
        key="infos"
        component={Pages.Infos}
        title="About"
        />
    </Scene>
  </Router>
);

export default Scenes;
