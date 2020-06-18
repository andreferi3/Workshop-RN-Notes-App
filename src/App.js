import React, { Component } from "react";
import { Dimensions, Text } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from "react-native-extended-stylesheet";

// Routes
import Root from './routes';

// Build Rem Units
const { width } = Dimensions.get('screen');
EStyleSheet.build({
  $rem: width / 380
})

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    Text.defaultProps = {
      ...(Text.defaultProps || {}),
      allowFontScaling: false
    }
    return (
      <Root />
    )
  }
}


