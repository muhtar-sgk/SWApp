import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../consts'

const SubItem = ({ icon, label }) => {
  return (
    <View style={styles.contanerSubTitle}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Text style={[styles.textSubTitle]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textSubTitle: {
    color: Colors.PRIMARY,
    marginLeft: 4,
    fontFamily: Fonts.REGULAR,
    textTransform: 'capitalize'
  },
  contanerSubTitle: {
    flexDirection: 'row',
    width: 120
  },
  icon: {
    height: 22,
    width: 22,
    tintColor: Colors.PRIMARY
  }
})

export default SubItem