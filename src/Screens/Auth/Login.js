import React, { useState } from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomTextInput } from "../../Components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../../Contants/Constants";
import { CustomButton } from "../../Components/Button";
// import axios from "axios";


export const LoginScreen = () => {
    const navigation = useNavigation()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login =async ()=>{

            try {
                 await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      
                      username: userName,
                      password: password,
                    })
                  })
                  .then(res => res.json())
                  .then(response =>{
                    console.log("response of Login", response)
                    // navigation.navigate('MainNavigator')
                    AsyncStorage.setItem("token", response.token)
                    navigation.replace("MainNavigator")
                  });
              } catch (error) {
                console.error("Error", error);
              }
        }
        
    

  
    
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 0.33 }}>
                <Image style={{ width: windowWidth / 6, height: windowWidth / 6 }} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
                    resizeMode="contain"
                />
            </View>
            <View style={{ paddingHorizontal: 20, flex: 0.33 }}>
                    <CustomTextInput
                    value={userName}
                    onChangeText={(text)=>{
                        setUserName(text)
                    }}
                    label="Enter Username"
                    />
                    <CustomTextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                        label="Enter Password"
                    />
            </View>

            <View style={{ paddingHorizontal: 20, flex: 0.33, }}>
                <CustomButton
                title={"Login"}
                textColor={"#fff"}
                backgroundColor={"gray"}
                onPress={login}
                />

            </View>


        </View>
    )
}