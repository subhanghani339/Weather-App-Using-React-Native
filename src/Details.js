import { View, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

const Details = (props) => {
  const {name} = props.route.params;
  console.log(props)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <View>
      <ImageBackground source={require("../assests/images/image2.jpg")} style={{height: deviceHeight, width: deviceWidth}} imageStyle={{opacity: 0.6, backgroundColor: '#000'}} />
      <View style={{position: 'absolute', paddingVertical: 20, paddingHorizontal: 10}} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: deviceWidth - 20, }}>
            <Icon name="menu" size={46} color="white" />
            <Image source={require('../assests/images/user.jpg')} style={{height: 46, width: 46, borderRadius: 50}} />
        </View>
      </View>
    </View>
  )
}

export default Details