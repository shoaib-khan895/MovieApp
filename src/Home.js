import React from 'react';
import { Button, Pressable, View, Text } from 'react-native';
import DiscoverMovies from '../DiscoverMovies';
import Styles from './Styles';
import TrendingPeople from './Components/TrendingPeople';
import TrendingMovies from './Components/TrendingMovies';
import Constants from './Constants';

const Home = function Home(props) {

  return (
    <View style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation} />
      <Pressable style={Styles.button} onPress={() => props.navigation.navigate('BottomNavHome')}>
        <Text style={Styles.text}>Navigation Screen</Text>
      </Pressable>
      <View
        style={{
          borderBottomColor: Constants.fadedColor,
          borderBottomWidth: 2,
        }}
      />
      <Pressable style={Styles.button} onPress={() => props.navigation.navigate('StroageScreen')}>
        <Text style={Styles.text}>Storage Screen</Text>
      </Pressable>

    </View>
  );
};

export default Home;
