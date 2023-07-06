import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function NavigationBar(props: { theme: string; }) {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate("Screen1")}>
                    <Text style={ props.theme !="dark"?styles.darkThemebuttonText: styles.ligthThemebuttonText}>
                        Screen 1
                    </Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate("Screen2")}>
                    <Text style={props.theme !="dark"?styles.darkThemebuttonText: styles.ligthThemebuttonText}>
                        Screen 2
                    </Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate("Settings")}>
                    <Text style={props.theme !="dark"?styles.darkThemebuttonText: styles.ligthThemebuttonText}>
                        Settings
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NavigationBar

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignContent:"space-around",
        padding: 2
    },
    button:{
        flex:1,
        backgroundColor:"#6561DA",
        height: 40, 
        margin:2,
        borderRadius:10,
        justifyContent:"center"
    },
    ligthThemebuttonText:{
        textAlign:"center",
        color:"white"
    },
    darkThemebuttonText:{
        textAlign:"center",
        color:"black"
        
    }

})