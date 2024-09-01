import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const SearchInput = ({title,value,placehoder,}) => {
  return (
    <View className='border-2 border-primary w-full h-12 pl-4 pr-2 rounded-xl focus:border-highlight items-center flex-row space-x-2'>
      <Text className='text-base font-pmedium text-text-300 flex-1'>Search your pets</Text>
      <TouchableOpacity>
        <Image source={icons.search} className='w-8 h-8' resizeMode='contain'/>
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput