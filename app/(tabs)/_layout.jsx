import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, focused})=>{
    return(
        <View className="items-center justify-center">
            <View className={`${focused?"bg-highlight":"bg-transparent"} w-16 h-1 mb-3`} />
            <Image source = {icon} resizeMode = "contain" className = "w-8 h-8"/>
        </View>
    )
}

const TabLayout = () => {
  return (
    <>
    <Tabs 
        screenOptions={{
            tabBarShowLabel:false, 
            tabBarInactiveTintColor:'#808085', 
            tabBarStyle:{borderTopColor:'#E9E8E1', borderTopWidth:1}
        }}>
        {/* Home Tab */}
        <Tabs.Screen name='home' options={{title:"Home", headerShown:false, tabBarIcon:({color, focused}) => (
            <TabIcon
                icon={focused?icons.homeSelected:icons.home}
                color={color}
                focused={focused}
            />
        )}}/>

        {/* Collection/Bookmark Tab */}
        <Tabs.Screen name='collection' options={{title:"Collection", headerShown:false, tabBarIcon:({color, focused}) => (
            <TabIcon
                icon={focused?icons.collectionSelected:icons.collection}
                color={color}
                focused={focused}
            />
        )}}/>

        <Tabs.Screen name='message' options={{title:"Message", headerShown:false, tabBarIcon:({color, focused}) => (
            <TabIcon
                icon={focused?icons.messageSelected:icons.message}
                color={color}
                focused={focused}
            />
        )}}/>

        <Tabs.Screen name='profile' options={{title:"Profile", headerShown:false, tabBarIcon:({color, focused}) => (
            <TabIcon
                icon={focused?icons.profileSelected:icons.profile}
                color={color}
                focused={focused}
            />
        )}}/>
    </Tabs>
    </>
  )
}

export default TabLayout