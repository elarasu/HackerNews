import React from 'react';
import Scenes from './Scenes';
import codePush from "react-native-code-push";

const App = () => (<Scenes />);

App=codePush(App);
export default App;
