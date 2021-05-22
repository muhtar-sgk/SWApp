import 'react-native-gesture-handler'
import * as React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import People from '../screens/people/People'
import Detail from '../screens/detail/Detail'
import Splash from '../screens/splash/Splash'

const Stack = createStackNavigator()

const Main = () => {
  const options = {
    gestureEnabled: true,
    ...TransitionPresets.SlideFromRightIOS
  }

  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name='Splash' component={Splash} options={options} />
      <Stack.Screen name='People' component={People} options={options} />
      <Stack.Screen name='Detail' component={Detail} options={options} />
    </Stack.Navigator>
  )
}

export default Main