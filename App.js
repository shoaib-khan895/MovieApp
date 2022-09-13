// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Constants from './src/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import DiscoverMovie from './src/Components/DiscoverMovie';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        {/* <Stack.Screen name="DiscoverMovie" component={DiscoverMovie} options={headerStyle} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const headerStyle = {
  title: ' Movies ',
  headerStyle: { backgroundColor: Constants.baseColor },
  headerTitleStyle: { color: Constants.textColor },
  headerLeft: () => <Icon name="menu" size={28} color=
    {Constants.textColor} />,
  headerRight: () => <Icon name="search" size={28} color=
    {Constants.textColor}></Icon>,
};
export default App;
