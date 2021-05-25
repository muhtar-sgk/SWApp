import React, { useEffect, useState } from 'react'
import {
  FlatList, Image, SafeAreaView, StatusBar, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { PeopleItem } from '../../components'
import { Colors, Fonts } from '../../consts'
import { getPeople } from '../../redux/actions'
import icBack from '../../images/ic_back.png'
import NetInfo from '@react-native-community/netinfo'

let page = 1

const People = ({ navigation }) => {
  const [isOffline, setIsOffline] = useState(false)

  const dispatch = useDispatch()
  const { people } = useSelector(state => state.peopleReducer)

  useEffect(() => {
    dispatch(getPeople(page))
  }, [])

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable)
      setIsOffline(offline)
    })

    return () => removeNetInfoSubscription()
  }, [])

  const onPressNext = () => {
    page = page + 1
    dispatch(getPeople(page))
  }

  const onPressPrev = () => {
    page = page - 1
    dispatch(getPeople(page))
  }

  const renderNetwork = () => {
    if (isOffline) {
      return (
        <View style={styles.containerOffline}>
          <Text style={styles.textTitleOffline}>Can't Connect Starwars</Text>
          <TouchableOpacity onPress={() => dispatch(getPeople(page))}>
            <Text style={styles.textSubTitleOffline}>Retry</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <FlatList
          data={people.results}
          renderItem={({ item, index }) =>
            <PeopleItem
              onPress={() => {
                const indexes = ((page - 1) * 10) + index + 1
                navigation.navigate('Detail', { id: indexes >= 17 ? indexes + 1 : indexes })
              }}
              name={item.name}
              birthYear={item.birth_year === 'unknown' ? '-' : item.birth_year}
              gender={item.gender === 'n/a' ? '-' : item.gender}
            />
          }
          onEndReachedThreshold={0.4}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    }
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.PRIMARY} barStyle='dark-content' translucent />
          <View style={styles.containerHeader}>
            <TouchableOpacity
              disabled={people.previous === null ? true : false}
              onPress={onPressPrev}>
              <Image
                source={icBack}
                style={[styles.arrow, { tintColor: people.previous === null ? Colors.BLACK : Colors.PRIMARY }]}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Starwars - People</Text>
            <TouchableOpacity
              disabled={people.next === null ? true : false}
              onPress={onPressNext}>
              <Image
                source={icBack}
                style={[styles.arrow,
                {
                  tintColor: people.next === null ? Colors.BLACK : Colors.PRIMARY,
                  transform: [{ rotate: '180deg' }]
                }]}
              />
            </TouchableOpacity>
          </View>
          {renderNetwork()}
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
  },
  arrow: {
    width: 22,
    height: 22,
    marginTop: 16,
    marginHorizontal: 8
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  textTitleOffline: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontFamily: Fonts.REGULAR
  },
  textSubTitleOffline: {
    color: Colors.PRIMARY,
    fontSize: 14,
    marginTop: 8,
    fontFamily: Fonts.MEDIUM
  },
  containerOffline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default People
