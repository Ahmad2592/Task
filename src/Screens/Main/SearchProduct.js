import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { windowWidth } from '../../Contants/Constants';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { ListView } from '../../Components/ListView';

export default function SearchProduct() {
  const navigation = useNavigation()

  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct]=useState("");

  const fetchProducts = async() => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  const fetchSearchProducts = async() => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${searchProduct}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(()=>{
    if(searchProduct.length>=1){
        fetchSearchProducts()
    }else{
        fetchProducts()
    }
  },[searchProduct])

  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchProduct}
      value={searchProduct}
      clearIcon={()=><Image
      source={{uri:"https://cdn3.iconfinder.com/data/icons/feather-5/24/search-1024.png"}}
      style={{height:windowWidth/3,width:windowWidth/3}}
      resizeMode='contain'
      />}
      icon={()=><Image
        source={{uri:"https://cdn3.iconfinder.com/data/icons/feather-5/24/search-1024.png"}}
        style={{height:windowWidth/3,width:windowWidth/3}}
        resizeMode='contain'
        />}
    />
      
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
    </View>
  )
}
