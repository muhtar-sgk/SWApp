import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Gap } from '.'
import { Colors, Fonts } from '../consts'

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Gap height={12} />
      <Text style={styles.textSubTitle}>{title}</Text>
      <Gap height={12} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: Colors.PRIMARY
  },
  textSubTitle: {
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center'
  }
})

export default Button