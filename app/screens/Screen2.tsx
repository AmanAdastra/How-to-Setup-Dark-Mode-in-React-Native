import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import NavigationBar from '../components/navbar/NavigationBar';
import { Dimensions } from 'react-native';
import { ThemeContext } from '../store/GlobalStore';
import { appTheme } from '../store/GlobalStore';
import { useAtom } from 'jotai';


const windowHeight = Dimensions.get('window').height;

function Screen2() {
    const theme = useContext(ThemeContext).appTheme
    const deviceColorScheme = useColorScheme()
    const [globalAppTheme, setGlobalAppTheme] = useAtom(appTheme)

    useEffect(() => {
        if (theme == "default") setGlobalAppTheme(String(deviceColorScheme))
    }, [deviceColorScheme])

    return (
        <View style={[styles.container, theme != "dark" ? styles.lightThemeBackground : styles.darkThemeBackground]}>
            <View style={[styles.screenBox]}>
                <Text style={[theme != "dark" ? styles.lightThemeScreenBoxText : styles.darkThemeScreenBoxText]}>Screen 2</Text>
            </View>
            <View style={styles.navigationBar}>
                <NavigationBar theme={theme} />
            </View>
        </View>
    )
}

export default Screen2

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
})