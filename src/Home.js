import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = () => {
    const [city, setCity] = useState('')
    const cities = [
        {
            name: 'New Delhi',
            image: require('../assests/images/image3.jpg')
        },
        {
            name: 'New York',
            image: require('../assests/images/image4.jpg')
        },
        {
            name: 'London',
            image: require('../assests/images/image5.jpg')
        },
        {
            name: 'San Francisco',
            image: require('../assests/images/image6.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../assests/images/image7.jpg')
        }
    ]
  return (
    <View>
      <ImageBackground source={require("../assests/images/image2.jpg")} style={{height: deviceHeight, width: deviceWidth}} imageStyle={{opacity: 0.6, backgroundColor: '#000'}} />
      <View style={{position: 'absolute', paddingVertical: 20, paddingHorizontal: 10}} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: deviceWidth - 20, }}>
            <Icon name="menu" size={46} color="white" />
            <Image source={require('../assests/images/user.jpg')} style={{height: 46, width: 46, borderRadius: 50}} />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={{fontSize: 40, color: 'white'}}>Hello Subhan</Text>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>Search the city by the name</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 20, paddingHorizontal: 10, marginTop: 16}}>
                <TextInput placeholder='Search City' placeholderTextColor='white' style={{paddingHorizontal: 10, color: 'white', fontSize: 16}} />
                <TouchableOpacity onPress={() => {}} >
                    <Icon name="search" size={22} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={{color: 'white', fontSize: 22, paddingHorizontal: 10, marginTop: 160, marginBottom: 20}}>
                My Locations
            </Text>
            <FlatList horizontal data={cities} renderItem={({item}) => (
                <View>
                <Cards name={item.name} image={item.image} />
                {console.log(item)}
                </View>
            )}
            />
        </View>
      </View>
    </View>
  )
}

export default Home