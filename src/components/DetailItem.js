import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../consts'

const DetailItem = ({ title, label }) => {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 12,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY
  },
  textLabel: {
    fontFamily: Fonts.MEDIUM,
    color: Colors.PRIMARY,
    marginTop: 4,
    fontSize: 14,
    textTransform: 'capitalize'
  }
})

export default DetailItem