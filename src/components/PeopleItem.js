import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SubItem } from '.'
import { Colors, Fonts } from '../consts'
import icBirthDay from '../images/ic_birthday.png'
import icGender from '../images/ic_gender.png'

const PeopleItem = ({ onPress, name, birthYear, gender }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.textTitle}>{name}</Text>
      <View style={styles.subContainer}>
        <SubItem
          icon={icBirthDay}
          label={birthYear}
        />
        <SubItem
          icon={icGender}
          label={gender}
        />
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  },
  textTitle: {
    color: Colors.PRIMARY,
    marginVertical: 8,
    fontFamily: Fonts.BOLD
  },
  line: {
    height: 0.5,
    backgroundColor: Colors.PRIMARY,
    marginTop: 14
  },
  subContainer: {
    flexDirection: 'row'
  }
})

export default PeopleItem