import React from 'react';
import {Button, View} from 'react-native';
import DiscoverMovies from './Components/DiscoverMovies';
import Styles from './Styles';
import TrendingPeople from './Components/TrendingPeople';
import TrendingMovies from './Components/TrendingMovies';
import Screen1 from './Components/BottomNavHome';

const Home = function Home(props)  {
  
  return (
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}/>
      <Button
        title="Navigation Screen"
        onPress={() => props.navigation.navigate('Screen1')}/>   
     </View>
  );
};

export default Home;
