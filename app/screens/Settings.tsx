import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native'
import NavigationBar from '../components/navbar/NavigationBar';
import { Dimensions } from 'react-native';
import { useAtom } from 'jotai';
import { appTheme, ThemeContext } from '../store/GlobalStore';
import { storeDatainLocalStorage } from '../storage/AppStorage';


const windowHeight = Dimensions.get('window').height;

function Settings() {
    const theme = useContext(ThemeContext).appTheme
    const deviceColorScheme = useColorScheme()
    const [globalAppTheme, setGlobalAppTheme] = useAtom(appTheme)

    useEffect(() => {
        if (theme == "default") setGlobalAppTheme(String(deviceColorScheme))
    }, [deviceColorScheme])

    const deviceThemeChangeHandler = async (themeType: string) => {
        console.log(themeType)
        storeDatainLocalStorage("appTheme", themeType)
        setGlobalAppTheme(themeType)
    }


    console.log(globalAppTheme, theme, deviceColorScheme, "Settings")
    return (
        <View style={[styles.container, theme != "dark" ? styles.lightThemeBackground : styles.darkThemeBackground]}>
            <View style={[styles.screenBox]}>
                <Text style={[theme != "dark" ? styles.lightThemeScreenBoxText : styles.darkThemeScreenBoxText]}>Settings</Text>
                <Pressable onPress={() => deviceThemeChangeHandler("light")}>
                    <Text style={[theme != "dark" ? styles.darkThemebuttonText : styles.ligthThemebuttonText]}>
                        Light
                    </Text>
                </Pressable>
                <Pressable onPress={() => deviceThemeChangeHandler("dark")}>
                    <Text style={[theme != "dark" ? styles.darkThemebuttonText : styles.ligthThemebuttonText]}>
                        Dark
                    </Text>
                </Pressable>
                <Pressable onPress={() => deviceThemeChangeHandler("default")}>
                    <Text style={[theme != "dark" ? styles.darkThemebuttonText : styles.ligthThemebuttonText]}>
                        Default
                    </Text>
                </Pressable>
            </View>
            <View style={styles.navigationBar}>
                <NavigationBar theme={theme} />
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    screenBox: {
        height: windowHeight * 0.75,
        justifyContent: "center"
    },
    navigationBar: {
        height: windowHeight * 0.25,
        width: "100%",
        justifyContent: "flex-end"
    },
    lightThemeBackground: {
        backgroundColor: "white"
    },
    darkThemeBackground: {
        backgroundColor: "black"
    },
    lightThemeScreenBoxText: {
        color: "black"
    },
    darkThemeScreenBoxText: {
        color: "white"
    },
    ligthThemebuttonText: {
        textAlign: "center",
        color: "white",

    },
    darkThemebuttonText: {
        textAlign: "center",
        color: "black",
    }
})