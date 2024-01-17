import { View, Text,StyleSheet, ScrollView,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { CustomTextInput } from '../../Components/TextInput';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { CustomButton } from '../../Components/Button';


export default function AddProduct() {
    const navigation = useNavigation()
    const [productName, setProductName] = useState("");
    const [discription, setDiscription] = useState("");
    const [percentage, setPercentage] = useState("");
    const [rating, setRating] = useState("");
    const [stock, setStock] = useState("");
    const [brand, setBrand] = useState("");
    const [catagory, setCatagory] = useState("");

    const addProduct = async() =>{
        fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: productName,
    description:discription,
    percentage:percentage,
    rating:rating,
    stock:stock,
    brand:brand,
    category:catagory
    /* other product data */
  })
})
.then(res => res.json())
.then((response)=>{
    console.log("RESPONSE", response)
    showMessage({
        message: "Success",
        description: "Product Added successful",
        type: "success",
      });
      navigation.goBack()
      
});
    }

  return (

<View style={mainviewstyles.mainview}>
    <ScrollView style={{flex:1, }}>
        <View style={{paddingHorizontal:20}}>
        <CustomTextInput
        style={styles.input}
        onChangeText={(text)=>setProductName(text)}
        value={productName}
        label="Product Name"
      />
      
        <CustomTextInput
        style={styles.input}
        onChangeText={(text)=>setPercentage(text)}
        value={percentage}
        label="Percentage Amount"
      />
       <CustomTextInput
        style={styles.input}
        onChangeText={(text)=>setRating(text)}
        value={rating}
        label="Product rating"
      />
       <CustomTextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text)=>setStock(text)}
        value={stock}
        label="Product Stock"
      />
      <CustomTextInput
        style={styles.input}
        onChangeText={(text)=>setBrand(text)}
        value={brand}
        label="Brand"
      />
       <CustomTextInput
        style={styles.input}
        onChangeText={(text)=>setCatagory(text)}
        value={catagory}
        label="category"
      />
      <CustomTextInput
        style={[styles.input,{maxHeight:300}]}
        multiline={true}
        numberOfLines={7}
        onChangeText={(text)=>setDiscription(text)}
        value={discription}
        label="Product discription"
      />
      <View style={{marginTop:10}}>
      <CustomButton
                title={"Add Product"}
                textColor={"#fff"}
                backgroundColor={"gray"}
                onPress={addProduct}
                />
      </View>
      
        </View>
        
    </ScrollView>
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
  const mainviewstyles = StyleSheet.create({
    mainview: {flex : 1 , backgroundColor : "white"},
  });

 