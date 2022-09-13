import * as React from 'react';
import { View, Text } from 'react-native'
import DiscoverMovie from './Components/DiscoverMovie';

const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DiscoverMovie/>
        </View>
    );
}
export default Home;