import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import Main from './src/navigations/Main'
import { Provider, useSelector } from 'react-redux'
import store from './src/redux/store'
import Loading from './src/components/Loading'

const MainApp = () => {
  const { isLoading } = useSelector(state => state.globalReducer)
  return (
    <NavigationContainer>
      <Main />
      {isLoading && <Loading />}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}


export default App
