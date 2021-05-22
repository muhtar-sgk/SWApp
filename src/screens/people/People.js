import React, { useEffect } from 'react'
import { FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { PeopleItem } from '../../components'
import { Colors, Fonts } from '../../consts'
import { getPeople } from '../../redux/actions'

let page = 1

const People = ({ navigation }) => {
  const dispatch = useDispatch()
  const { people } = useSelector(state => state.peopleReducer)

  useEffect(() => {
    dispatch(getPeople(page))
  }, [])

  const onPressNext = () => {
    page = page + 1
    dispatch(getPeople(page))
  }

  const onPressPrev = () => {
    page = page - 1
    dispatch(getPeople(page))
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor={Platform.OS === 'android' ? 'black' : Colors.WHITE} barStyle='dark-content' translucent />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              disabled={people.previous === null ? true : false}
              onPress={onPressPrev}>
              <Image
                source={require('../../images/ic_back.png')}
                style={{ width: 22, height: 22, tintColor: people.previous === null ? Colors.BLACK : Colors.PRIMARY, marginTop: 16 }}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Starwars - People</Text>
            <TouchableOpacity
              disabled={people.next === null ? true : false}
              onPress={onPressNext}>
              <Image
                source={require('../../images/ic_back.png')}
                style={{ width: 22, height: 22, tintColor: people.next === null ? Colors.BLACK : Colors.PRIMARY, marginTop: 16, transform: [{ rotate: "180deg" }] }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={people.results}
            renderItem={({ item, index }) =>
              <PeopleItem
                onPress={() => {
                  const indexes = ((page - 1) * 10) + index + 1
                  navigation.navigate('Detail', { id: indexes >= 17 ? indexes + 1 : indexes })
                }
                }
                name={item.name}
                birthYear={item.birth_year === 'unknown' ? '-' : item.birth_year}
                gender={item.gender === 'n/a' ? '-' : item.gender}
              />
            }
            onEndReachedThreshold={0.4}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView >
    </>
  )
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: Colors.PRIMARY
  },
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  title: {
    color: '#ffe81f',
    fontSize: 16,
    fontFamily: Fonts.STARWARS,
    textAlign: 'center',
    marginTop: 16
  }
})

export default People
