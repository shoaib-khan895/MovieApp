import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MoviesDetails';
import Screen1 from './src/Components/BottomNav/BottomNavHome';
import Screen2 from './src/Components/BottomNav/Screen2';
import StroageScreen from './src/Components/LocalStroage/StorageScreen';
import BottomNavHome from './src/Components/BottomNav/BottomNavHome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BottomNavHome" component={BottomNavHome} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="StroageScreen" component={StroageScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movies',
  headerStyle: { backgroundColor: Constants.baseColor },
  headerTitleStyle: { color: Constants.textColor },
  // headerLeft: () => <Icon name="menu" size={34} color={Constants.textColor} />,
  // headerRight: () => (
  //   <Icon name="search" size={25} color={Constants.textColor} />
  // ),
};

export default App;