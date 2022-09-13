import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { GET } from '../Services/API';
import { IMAGE_POSTER_URL } from '../config';
import Constants from '../Constants';
import  {SliderBox}  from "react-native-image-slider-box";

const DiscoverMovie = () => {

    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await GET('discover/movie');
            setMovies(response.results);
            const images = response.results.map((data) = `${IMAGE_POSTER_URL},${data.backdrop_path}`)

            let backImages = [];
            for (let i = 0; i < 10; i++) {
                backImages = [...backImages, images[i]];
            }
            setImages(backImages);
        }
        getMovies();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <SliderBox
                images={images}/> */}
          </View>
    );
}
export default DiscoverMovie;