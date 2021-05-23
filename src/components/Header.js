import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors, Fonts } from '../consts'

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../images/ic_arrow_back.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignSelf: 'stretch',
    shadowColor: Colors.BROWN_GREY_TWO,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 16,
    width: 16,
    justifyContent: 'flex-start',
    marginLeft: 16,
    tintColor: Colors.PRIMARY
  },
  text: {
    color: Colors.PRIMARY,
    fontFamily: Fonts.STARWARS,
    fontSize: 16,
    justifyContent: 'center'
  },
  containerTitle: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Header