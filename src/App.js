import React, { Component } from "react";
import { Text, StyleSheet } from 'react-native';

// Routes
import Root from './routes'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 0,
      data: new Array(20).fill('')
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Root />
    )
  }
}

const style = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginTop: 10
  },
  listItem: {
    paddingVertical: 15
  },
  imageProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
