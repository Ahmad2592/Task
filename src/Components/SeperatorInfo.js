import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const SeperatorInfo = ({title, subTitle}) => {

    return (
        <View style={SeperatorInfoStyle.mainContainer}>
        <View style={SeperatorInfoStyle.container}>
                <View>
                    <Text style={SeperatorInfoStyle.title}>
                        {title}
                    </Text>
                </View>
                <View>
                    <Text>
                        {subTitle}
                    </Text>
                </View>
            </View>
            <View
            style={SeperatorInfoStyle.border}
            />
        </View>

    );
};

const SeperatorInfoStyle = StyleSheet.create({
    mainContainer:{marginTop:20},
  container:{flexDirection:'row', justifyContent:'space-between', },
  title:{fontWeight:"800"},
  border:{borderBottomWidth:1, marginTop:10, borderBottomColor:"gray"}
})