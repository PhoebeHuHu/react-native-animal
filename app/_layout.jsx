// show in every screen, like where we put navbar or a footer in a web
// create a start bar template: rnfes

import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from "expo-font"


// Prevent the splash screen fron auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  //fonts 
  const [fontsLoaded, error] = useFonts({
    "Mulish-Bold": require('../assets/fonts/Mulish-Bold.ttf'),
    "Mulish-ExtraBold":require("../assets/fonts/Mulish-ExtraBold.ttf"),
    "Mulish-Medium":require("../assets/fonts/Mulish-Medium.ttf"),
    "Mulish-Regular":require("../assets/fonts/Mulish-Regular.ttf"),
    "Mulish-SemiBold":require("../assets/fonts/Mulish-SemiBold.ttf")
  })

  useEffect(()=>{
    // Check for errors
    if (error) {
      throw error;
    }

    // Hide splash screen when fonts are loaded
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // Prevent rendering until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }


  return ((
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />
    </Stack>
  ))
}

export default RootLayout

