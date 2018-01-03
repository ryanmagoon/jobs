import React, { Component } from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          raised
          buttonStyle={styles.buttonStyle}
          containerViewStyle={styles.buttonContainerStyle}
          title="Onwards!"
          onPress={this.props.onComplete}
        />
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => (
        <SafeAreaView
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </SafeAreaView>
      )
    )
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: '10%',
    color: 'whitesmoke'
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  },
  buttonContainerStyle: {
    marginTop: 15
  }
}

export default Slides
