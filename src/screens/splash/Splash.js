import React, { useEffect } from 'react'
import { Animated, Image, StatusBar, StyleSheet, View } from 'react-native'
import icStarWars from '../../images/ic_starwars.png'

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
    <Animated.View style={[styles.animated, { opacity: fadeAnim }]}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='default'
          translucent
        />
        <Image
          source={icStarWars}
          style={styles.icon}
        />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  animated: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 200,
    width: 200
  }
})

export default Splash