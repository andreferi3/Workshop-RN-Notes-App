import React, { Component } from "react";
import { Dimensions, Text } from 'react-native';
import { Provider } from 'react-redux';
import appStore from './public/redux/store';

import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from "react-native-extended-stylesheet";

// Routes
import Root from './routes';
import NavigationServices from "./routes/NavigationServices";

// Build Rem Units
const { width } = Dimensions.get('screen');
EStyleSheet.build({
  $rem: width / 380,
  $success: '#33c652'
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
      <Provider store={appStore}>
        <Root ref={navigationRef => {
          NavigationServices.setTopLevelNavigator(navigationRef)
        }} />
      </Provider>
    )
  }
}


