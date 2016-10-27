# HackerNews app
A very simple straightforward hackernews client. Using this as playground to learn bit of react-native and graphql

## Features

## Pre-requisites
Please refer to react-native documentation on how to setup and run applications.

### Build instructions
  * npm install
  * yo rn-toolbox:assets --icon src/assets/logo.png
  * yo rn-toolbox:assets  --splash src/assets/hnsplash.png
  * ios project needs to be opened and name has to be set correctly
  * react-native bundle --platform ios --dev false --entry-file index.ios.js --bundle-output iOS/main.jsbundle
  * on ios run as 'Release'

### Uses
  * react-native
  * graphql (apollo-client)
  * https://www.graphqlhub.com/

## References
Following links were very useful in getting this sample up and running
  * https://www.graphqlhub.com/
  * https://github.com/stubailo/microhn
  * https://github.com/bamlab/generator-rn-toolbox
  * http://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store/

### Creating assets
  * https://www.shopify.com/tools/logo-maker
  * https://www.befunky.com/create/designer/

## Todo
  * setup version number cleanly across the board - including about
  * verify android release
  * add pull to refresh
  * add hackernews list
  * top stories / new stories
  * show articles that are read vs unread
  * about page to include hap.im logo, plus description
  * scroll down to auto fetch more 
  * display list neatly
  * lint and clean unwanted/unused code
  * auto update using codepush
  * add unit tests
  * search articles
  * archive or delete article once read
  * comments to be viewed
  * store the state of what has been refreshed and read within app
  * allow adding comments
  * allow pining articles
  * add screenshots to this project page
  * reduce size
    * remove fonts ?
    * clean size of assets?

## Release Notes
  * 0.0.1 initial release - basic top 20 news articles work
