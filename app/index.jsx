// the index page is our homepage
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className = "flex-1 items-center justify-center">
      <Text className="text-3xl font-titlebold">Furever</Text>
      <StatusBar style="auto"/>
      <Link href='/home' className="text-blue-400 font-pmedium">Go to homepage</Link>
    </View>
  );
}


