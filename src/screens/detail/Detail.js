import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DetailItem, Header, ListItem, Gap } from '../../components'
import ModalDetail from '../../components/ModalDetail'
import { Colors, Fonts } from '../../consts'
import { getDetail } from '../../redux/actions'
import { fetchData } from '../../utils/Fetch'

const Detail = ({ route, navigation }) => {
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [starships, setStarships] = useState([])
  const [isVisibleFilm, setIsVisibleFilm] = useState(false)
  const [isVisibleSpecies, setIsVisibleSpecies] = useState(false)
  const [isVisibleVehicles, setIsVisibleVehicles] = useState(false)
  const [isVisibleStarships, setIsVisibleStarships] = useState(false)

  const dispatch = useDispatch()
  const { detail } = useSelector(state => state.detailReducer)

  const showHideFilms = () => {
    setIsVisibleFilm(!isVisibleFilm)
  }

  const showHideSpecies = () => {
    setIsVisibleSpecies(!isVisibleSpecies)
  }

  const showHideVehicles = () => {
    setIsVisibleVehicles(!isVisibleVehicles)
  }

  const showHideStarships = () => {
    setIsVisibleStarships(!isVisibleStarships)
  }

  useEffect(() => {
    dispatch(getDetail(route.params.id))
  }, [])

  const renderFilms = () => {
    if (films !== undefined) {
      if (films.length !== 0) {
        return films.map(item =>
          <ListItem title={item.title} />
        )
      } else {
        return (
          <Text style={styles.textEmpty}>No data films</Text>
        )
      }
    }
  }

  const renderSpecies = () => {
    if (species !== undefined) {
      if (species.length !== 0) {
        return species.map(item =>
          <ListItem title={item.name} />

        )
      } else {
        return (
          <Text style={styles.textEmpty}>No data species</Text>
        )
      }
    }
  }

  const renderVehicles = () => {
    if (vehicles !== undefined) {
      if (vehicles.length !== 0) {
        return vehicles.map(item =>
          <ListItem title={item.name} />

        )
      } else {
        return (
          <Text style={styles.textEmpty}>No data vehicles</Text>
        )
      }
    }
  }

  const renderStarships = () => {
    if (starships !== undefined) {
      if (starships.length !== 0) {
        return starships.map(item =>
          <ListItem title={item.name} />
        )
      } else {
        return (
          <Text style={styles.textEmpty}>No data starships</Text>
        )
      }
    }
  }

  const onPressVisibleFilm = () => {
    setIsVisibleFilm(!isVisibleFilm)
    fetchData(detail.films).then(response => { setFilms(response) })
  }

  const onPressVisibleSpecies = () => {
    setIsVisibleSpecies(!isVisibleSpecies)
    fetchData(detail.species).then(response => { setSpecies(response) })
  }

  const onPressVisibleVehicles = () => {
    setIsVisibleVehicles(!isVisibleVehicles)
    fetchData(detail.vehicles).then(response => { setVehicles(response) })
  }

  const onPressVisibleStarships = () => {
    setIsVisibleStarships(!isVisibleStarships)
    fetchData(detail.starships).then(response => { setStarships(response) })
  }

  const onPressBack = () => {
    navigation.goBack()
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ModalDetail
            isVisible={isVisibleFilm}
            onBackdropPress={() => setIsVisibleFilm(false)}
            children={renderFilms()}
            onPress={showHideFilms}
            title='Films'
          />
          <ModalDetail
            isVisible={isVisibleSpecies}
            onBackdropPress={() => setIsVisibleSpecies(false)}
            children={renderSpecies()}
            onPress={showHideSpecies}
            title='Species'
          />
          <ModalDetail
            isVisible={isVisibleVehicles}
            onBackdropPress={() => setIsVisibleVehicles(false)}
            children={renderVehicles()}
            onPress={showHideVehicles}
            title='Vehicles'
          />
          <ModalDetail
            isVisible={isVisibleStarships}
            onBackdropPress={() => setIsVisibleStarships(false)}
            children={renderStarships()}
            onPress={showHideStarships}
            title='Starships'
          />
          <Header title='Detail People' onPress={onPressBack} />
          <ScrollView style={styles.container}>
            <Text style={styles.title}>{detail.name}</Text>
            <View style={{ paddingHorizontal: 8 }}>
              <DetailItem
                title='Height'
                label={detail.height}
              />
              <Gap height={8} />
              <DetailItem
                title='Mass'
                label={detail.mass}
              />
              <Gap height={8} />
              <DetailItem
                title='Hair Color'
                label={detail.hair_color}
              />
              <Gap height={8} />
              <DetailItem
                title='Skin Color'
                label={detail.skin_color}
              />
              <Gap height={8} />
              <DetailItem
                title='Eye Color'
                label={detail.eye_color}
              />
              <Gap height={8} />
              <DetailItem
                title='Birth Year'
                label={detail.birth_year}
              />
              <Gap height={8} />
              <DetailItem
                title='Gender'
                label={detail.gender}
              />
              <Gap height={12} />
              <View style={styles.line} />
              <Button title='Films' onPress={onPressVisibleFilm} />
              <View style={styles.line} />
              <Button title='Species' onPress={onPressVisibleSpecies} />
              <View style={styles.line} />
              <Button title='Vehicles' onPress={onPressVisibleVehicles} />
              <View style={styles.line} />
              <Button title='Starships' onPress={onPressVisibleStarships} />
              <View style={styles.line} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
    backgroundColor: Colors.BLACK
  },
  title: {
    fontFamily: Fonts.BOLD,
    color: Colors.PRIMARY,
    textAlign: 'center',
    fontSize: 16
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: Colors.PRIMARY
  },
  textSubTitle: {
    color: Colors.PRIMARY,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center'
  },
  subContainer: {
    marginVertical: 4,
    justifyContent: 'center'
  },
  textItem: {
    color: Colors.BLACK,
    fontFamily: Fonts.REGULAR
  },
  textEmpty: {
    color: Colors.BLACK,
    fontFamily: Fonts.ITALIC
  },
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

export default Detail
