import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../constants'
import ModuleTitle from '../titles/moduleTitle'

const CategoriesBar = () => {
    const categories = [
    { id: '1', name: 'Dogs',icon: icons.dog},
    { id: '2', name: 'Cats', icon:icons.cat},
    { id: '3', name: 'Rodents',icon:icons.hamster },
    { id: '4', name: 'Reptiles',icon:icons.reptile },
    ]
  return (
    
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-5'>
        {categories.map((category) => (
            <TouchableOpacity key={category.id} className='items-center gap-1'>
                <Image source={category.icon} className='w-20 h-20 rounded-lg'/>
                <Text className='font-titlemedium'>{category.name}</Text>    
            </TouchableOpacity>
        ))}
      </ScrollView>
   
  )
}

export default CategoriesBar