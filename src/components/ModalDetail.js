import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Colors, Fonts } from '../consts'
import Modal from 'react-native-modal'
import { Gap } from '.'

const ModalDetail = ({ isVisible, onBackdropPress, onPress, children, title }) => {
  return (
    <Modal
      useNativeDriver
      animationInTiming={500}
      animationOutTiming={800}
      isVisible={isVisible}
      style={styles.containerModal}
      onBackdropPress={onBackdropPress}>
      <View style={styles.containerListModal}>
        <View style={styles.containerModalTitle}>
          <Text style={styles.modalTitle}>{title}</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Image source={require('../images/ic_close.png')} style={styles.iconClose} />
          </TouchableOpacity>
        </View>
        <View style={styles.lineModal} />
        <Gap height={16} />
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  containerModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  containerListModal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white'
  },
  iconClose: {
    height: 14,
    width: 14
  },
  containerModalTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  modalTitle: {
    fontFamily: Fonts.BOLD,
    fontSize: 16,
    width: '90%',
    color: Colors.DARK_GREY_BLUE,
    textAlign: 'center'
  },
  lineModal: {
    height: 1,
    backgroundColor: Colors.VERY_LIGHT_PINK_TWO,
    marginTop: 16
  }
})

export default ModalDetail