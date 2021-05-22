import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../consts'

const ListItem = ({ title }) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.textItem}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer: {
    marginVertical: 4,
    justifyContent: 'center'
  },
  textItem: {
    color: Colors.BLACK,
    fontFamily: Fonts.REGULAR
  },
})

export default ListItem