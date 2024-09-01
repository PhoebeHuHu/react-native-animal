import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import {icons} from '../../constants'
import { StatusBar } from 'expo-status-bar'
import SearchInput from '../../components/SearchInput'
import CategoriesBar from '../../components/homePage/Categories'
import LatistList from '../../components/homePage/LatistList'
import ModuleTitle from '../../components/titles/moduleTitle'


const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{id:1}]}
        keyExtractor={(item)=>item.$id}
        renderItem={({item}) =>(
          <Text>{item.id}</Text>
        )}
        className='bg-white'
        ListHeaderComponent={()=>(
          <View className='flex space-y-5'>
            {/* Page Title */}
            <View className='bg-primary px-3 py-6 space-y-5 '>
              <Text className="font-titlebold text-4xl">Discover your ideal furry friend</Text>
              <View className='flex-row items-center'>
                <Image source={icons.location} className='w-8 h-8 mr-3'/>
                <Text className="font-pbold text-base">Haymarket NSW 2000</Text>
              </View>
            </View>
            
            {/* Page Content */}
            <View className='bg-white px-3'>
              <SearchInput/>  
              <ModuleTitle content="Categories"/>
              <CategoriesBar/>
              <ModuleTitle content="Latest"/>
              <LatistList/>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home