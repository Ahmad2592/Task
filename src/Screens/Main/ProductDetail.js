import { View, Image, Text, ScrollView} from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { windowWidth } from '../../Contants/Constants';
import { SeperatorInfo } from '../../Components/SeperatorInfo';

export default function ProductDetail({route}) {
    let data

    if(route.params?.data){
        data = route.params.data
    }


  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
        <ScrollView>
        <Carousel
        loop
                width={windowWidth}
                height={windowWidth / 2}
                autoPlay={true}
                data={data.images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item,index }) => (
                    <Image
                    source={{uri:item}}
                    resizeMode='contain'
                    style={{width:windowWidth, height:windowWidth/2}}
                    />
                )}
            />
            <View style={{paddingHorizontal:20,}}>
            <View style={{alignItems:'center', marginTop:20}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>{data.title}</Text>
            </View>
            <SeperatorInfo
            title={"Brand"}
            subTitle={data.brand}
            />
            <SeperatorInfo
            title={"Brand"}
            subTitle={data.brand}
            />
            <SeperatorInfo
            title={"Price"}
            subTitle={"$"+""+data.price}
            />
            <SeperatorInfo
            title={"Discount Percentage"}
            subTitle={data.discountPercentage+" "+"%"}
            />
            <SeperatorInfo
            title={"Rating"}
            subTitle={data.rating}
            />
            <SeperatorInfo
            title={"Stock"}
            subTitle={data.stock}
            />
            <SeperatorInfo
            title={"Category"}
            subTitle={data.category}
            />
            <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold', fontSize:22}}>
                    Description:
                </Text>
                <Text style={{marginTop:10, fontSize:15, fontWeight:300}}>
                    {data.description}
                </Text>
            </View>
            </View>
        </ScrollView>
    </View>

   
  )
}
