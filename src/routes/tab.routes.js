import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Cadastro from '../screens/Cadastro'
import Perfil from '../screens/Perfil'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212'
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold'
        },

    tabBarStyle: {
        backgroundColor: '#111827',
        borderTopWidth: 0,
        height: 65,
        paddingBottom: 8,
        paddingTop: 8
    },

        tabBarActiveTintColor: '#7c3aed',

        tabBarInactiveTintColor: '#fff'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  )
}