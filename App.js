import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (

    <View style = {{
      flex: 1, justifyContent: 'center',
      alignItems: 'center'
      }}>
    <View style={{
      width:100,height: 100,backgroundColor: 'red',
      alignSelf:'center'
      }}></View>
    <View style={{
      width:100,height: 100,backgroundColor: 'blue',
      alignSelf:'center'
      }}>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})