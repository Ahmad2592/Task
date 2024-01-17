import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from '../Contants/Constants';

export const ListView = ({onPress, uri, title, brand, price, rating}) => {

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={{flex:1, backgroundColor: "#fff", borderBottomColor: "gray", padding:10  }}>
                    <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }}>
                      <View style={{ flexDirection: 'row', alignItems:'center',}}>
                      <View>
                        <Image
                          source={{ uri: uri }}
                          style={{ width: windowWidth / 6, height: windowWidth / 6 , borderRadius:windowWidth/6 }}
                          // resizeMode={"contain"}
                        />
                      </View>
                        <View style={{marginLeft:10}}>
                        <Text style={{fontWeight:"bold", fontSize:20}}>
                          {title}
                        </Text>
                        <Text style={{fontWeight:"200", fontSize:15}}>
                          {brand}
                        </Text>
                        </View>
                      </View>
                      
                        <View>
                        <Text style={{fontWeight:"bold", fontSize:20}}>
                          ${price}
                        </Text>
                        <Text style={{fontWeight:"400", fontSize:12}}>
                          Rating: {rating}
                        </Text>
                        </View>
                    </View>
                    <View
                    style={{borderBottomWidth:1, marginTop:20, borderBottomColor:"gray"}}
                    />
                  </View>
                  </TouchableOpacity>

    );
};

// const SeperatorInfoStyle = StyleSheet.create({
//     mainContainer:{marginTop:20},
//   container:{flexDirection:'row', justifyContent:'space-between', },
//   title:{fontWeight:"800"},
//   border:{borderBottomWidth:1, marginTop:10, borderBottomColor:"gray"}
// })