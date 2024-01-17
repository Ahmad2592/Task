import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButton = ({title, textColor, backgroundColor, onPress}) => {

    return (

        <TouchableOpacity
                onPress={onPress}
                style={[ButtonStyle.container,{backgroundColor:backgroundColor}]} >
                    <Text style={[ButtonStyle.title,{color: textColor}]}>{title}</Text>
                </TouchableOpacity>
    );
};

const ButtonStyle = StyleSheet.create({
  container:{ padding: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" },
  title:{  fontWeight: "bold", fontSize: 14 }
})