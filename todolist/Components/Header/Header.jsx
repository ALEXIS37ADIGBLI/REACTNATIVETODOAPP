import { View, Text, Image } from 'react-native'
import React from 'react'
import { s } from './Header.style';
import lg from '../../assets/lg.jpg' ;

const Header = () => {
  return (
    <>
    <Image style={s.img} source={lg} resizeMode='contain'/>
    <Text style={s.subtitle}>Tu as un truc à faire</Text>
    </>
  )
}

export default Header