import { View, Image, ImageBackground, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

const Details = (props) => {
  const [data, setData] = useState()
  const {name} = props.route.params;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => console.log(err))
  }, [])

  console.log(data)
  return (
    <View>
      <ImageBackground source={require("../assests/images/image1.jpg")} style={{height: deviceHeight, width: deviceWidth}} imageStyle={{opacity: 0.6, backgroundColor: '#000'}} />
      <View style={{position: 'absolute', paddingVertical: 20, paddingHorizontal: 10}} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: deviceWidth - 20, }}>
            <Icon name="menu" size={46} color="white" />
            <Image source={require('../assests/images/user.jpg')} style={{height: 46, width: 46, borderRadius: 50}} />
        </View>
      {
        data ? <View>
        <Text style={{color: '#fff', fontSize: 40}}>{name}</Text>
        </View> : null
      }
      </View>
    </View>
  )
}

export default Details