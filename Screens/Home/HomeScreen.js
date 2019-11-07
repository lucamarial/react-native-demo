import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text> Hello World!!! </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center"
  }
})