import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { windowWidth } from '../../Contants/Constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListView } from '../../Components/ListView';

export default function Home() {
  const navigation = useNavigation()

  const [products, setProducts] = useState([]);
  const [showButton, setShowButton] = useState(false)

  const fetchProducts = async() => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const fetchUser = async() => {
    try {
            const token = await AsyncStorage.getItem('token');
            
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer '+token, 
            }, 
          })
          .then(res => res.json())
          .then(response=>{
            console.log("RESPONSE", response)
            if(response.message == "Authentication Problem" || response.message == "Token Expired!"){
              setShowButton(false)
            }
            else{ 
              setShowButton(true)
            }
          });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(()=>{
    fetchProducts()
    fetchUser()
  },[])

  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      
      <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={({ item }) => {
        return (
          <ListView
          onPress={()=>navigation.navigate("ProductDetail",{data:item})}
          uri={item.thumbnail}
          title={item.title}
          brand={item.brand}
          price={item.price}
          rating={item.rating}
          />
          
         
          
        );
      }}
      />

      {
        showButton && (
<View>
      <TouchableOpacity
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height: 60,
      backgroundColor: 'gray',
      borderRadius: 100,
    }}
  onPress={()=>navigation.navigate("Addproduct")}>
    <Text style={{fontSize:35, color:"#fff"}}>
      +
    </Text>
  </TouchableOpacity>
      </View>
        )
      }
      
    </View>
  )
}



const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius : 10
  },
});