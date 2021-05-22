import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Colors } from '../consts'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.PRIMARY} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading
