import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../Contants/Constants";

export const Splash = () => {
    const navigation = useNavigation()
    
    const performTimeConsumingTask = () => {
        setTimeout(()=>{
            navigation.replace("MainNavigator")
        },4000)
    }

    useEffect(()=>{
        performTimeConsumingTask()
    },[])
   
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent:"center", alignItems:"center" }}>
            <Image
            source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
            style={{width: windowWidth/3, height:windowWidth/3}}
            resizeMode="contain"
            />
        </View>
    )
}