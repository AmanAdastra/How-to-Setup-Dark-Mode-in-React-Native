import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './app/screens/Screen1';
import Screen2 from './app/screens/Screen2';
import { useColorScheme } from 'react-native';
import { appTheme } from './app/store/GlobalStore';
import { useAtom } from 'jotai';
import { getDataFromLocalStorage } from './app/storage/AppStorage';
import { useState, useEffect } from 'react'
import Settings from './app/screens/Settings';
import { ThemeContext } from './app/store/GlobalStore';

const Stack = createNativeStackNavigator();

export default function App() {
  const deviceTheme = useColorScheme()
  const [localStorageTheme, setLocalStorageTheme] = useState(undefined)
  const [globalAppTheme, setGlobalAppTheme] = useAtom(appTheme)
  let apptheme = String(globalAppTheme)

  useEffect(() => {
    getDataFromLocalStorage("appTheme").then((theme) => {
      if (theme != undefined) setLocalStorageTheme(theme)
    }).catch(err => { console.log(err) })
    if (globalAppTheme == "default") setGlobalAppTheme(String(deviceTheme))
  }, [])

  useEffect(() => {
    if (localStorageTheme != undefined && localStorageTheme != "default") setGlobalAppTheme(localStorageTheme)
    else setGlobalAppTheme(String(deviceTheme))
  }, [localStorageTheme])
  if (apptheme == "default") apptheme = String(deviceTheme)
  return (
    <ThemeContext.Provider value={{ "appTheme": apptheme }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export { ThemeContext }