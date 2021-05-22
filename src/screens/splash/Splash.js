import React, { useEffect } from 'react'
import { Animated, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../../consts'
import { useSplash } from '../../hooks'

const Splash = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0)

  useEffect(() => {
    onSplash()
  })

  const onSplash = () => {
    Animated.timing(
      fadeAnim,
      {
        useNativeDriver: true,
        toValue: 1,
        duration: 3000
      }
    ).start(async () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'People' }]
      })
    })
  }

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle='default' translucent />
        <Image
          source={require('../../images/ic_starwars.png')}
          style={{ height: 200, width: 200 }}
        />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Splash