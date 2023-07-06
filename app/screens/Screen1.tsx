import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import NavigationBar from '../components/navbar/NavigationBar'
import { Dimensions } from 'react-native';
import { useAtom } from 'jotai'
import { appTheme, ThemeContext } from '../store/GlobalStore';

const windowHeight = Dimensions.get('window').height;

function Screen1() {
    const theme = useContext(ThemeContext).appTheme
    const deviceColorScheme = useColorScheme()
    const [globalAppTheme, setGlobalAppTheme] = useAtom(appTheme)

    useEffect(() => {
        console.log("Inside use effect", theme)
        if (theme == "default") setGlobalAppTheme(String(deviceColorScheme))
    }, [deviceColorScheme])

    return (
        <View style={[styles.container, theme != "dark" ? styles.lightThemeBackground : styles.darkThemeBackground]}>
            <View style={styles.screenBox}>
                <Text style={[theme != "dark" ? styles.lightThemeScreenBoxText : styles.darkThemeScreenBoxText]}>Screen1</Text>
            </View>
            <View style={styles.navigationBar}>
                <NavigationBar theme={theme} />
            </View>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lightThemeBackground: {
        backgroundColor: "white"
    },
    darkThemeBackground: {
        backgroundColor: "black"
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
    lightThemeScreenBoxText: {
        color: "black",
    },
    darkThemeScreenBoxText: {
        color: "white"
    },
})