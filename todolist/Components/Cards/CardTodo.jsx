import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import co from '../../assets/co.png' ;
import { s } from './CardTodoStyle';
const CardTodo = ({todo}) => {
  return (
    <TouchableOpacity style={s.card}>
      <Text style={[s.txt, todo.IsCompleted &&{ textDecorationLine: "line-through"}]}>{todo.title}</Text>
        { todo.IsCompleted &&<Image source={co} style={s.img}/>}
    </TouchableOpacity>
  )
}

export default CardTodo