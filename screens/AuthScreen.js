import React, { Component } from 'react'
import { AsyncStorage, SafeAreaView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin()
    AsyncStorage.removeItem('fb_token')
  }

  render() {
    return (
      <SafeAreaView>

      </SafeAreaView>
    )
  }
}

export default connect(null, actions)(AuthScreen)
