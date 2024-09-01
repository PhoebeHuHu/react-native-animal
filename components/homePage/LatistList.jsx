import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons,images } from '../../constants'
const LatistList = () => {
    const latestCards = [
        {id:1, name:"Charlie", compatibility:85,location:3.4,age:"2 years old",gender:icons.female,photo:images.charlie},
        {id:2, name:"Duke", compatibility:85,location:0.8,age:"4 years old",gender:icons.male,photo:images.duke},
        {id:3,name:"Bella",compatibility:92,location:1.7,age:"1 year old",gender:icons.male,photo:images.bella}
    ]
  return (
    
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-5'>
        {latestCards.map((card)=>(
            <TouchableOpacity className='bg-primary p-2 space-y-1 rounded-lg'>
                <Image source={card.photo} className='w-40 h-40 rounded-md'/>
                <View className='flex-row justify-between items-center'>
                    <Text className='font-pbold text-base'>{card.name}</Text>
                    <Image source={card.gender} className='w-5 h-5'/>
                </View>
                
                <View className='flex-row items-center space-x-1'>
                    <Image source={icons.location} className='w-4 h-4' tintColor="#808085"/>
                    <Text className='text-text font-pthin'>{card.location} km</Text>
                </View>

                
                
                
            </TouchableOpacity>
        ))}
      </ScrollView>
    
  )
}

export default LatistList