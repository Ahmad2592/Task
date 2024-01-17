import { View, Image, Text, ScrollView, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { windowWidth } from '../../Contants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SeperatorInfo } from '../../Components/SeperatorInfo';

export default function AccountScreen() {
    const navigation = useNavigation()
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchUser = async() => {
        try {
            setLoading(true)
                const token = await AsyncStorage.getItem('token');
                
            fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer '+token, 
                }, 
              })
              .then(res => res.json())
              .then(response=>{
                setLoading(false)
                console.log("RESPONSE", response)
                if(response.message == "Authentication Problem" || response.message == "Token Expired!"){
                    navigation.replace("AuthNavigator")
                }
                else{ 
                    setUserDetails(response)
                }
              });
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }

      useEffect(()=>{
        fetchUser()
      }, [])
   
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
        <ScrollView>
            {
                loading ? (
                    <View style={{justifyContent:'center', alignItems:'center'}}>
<ActivityIndicator/>
                    </View>
                    
                ) : (
<>
<View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
            <Image
            source={{uri:userDetails.image}}
            style={{width:windowWidth/4, height:windowWidth/4, borderRadius:windowWidth/4}}
            />
            </View>
            
            <View style={{paddingHorizontal:20,}}>
            <SeperatorInfo
            title={"Name"}
            subTitle={userDetails.firstName + " "+ userDetails.lastName}
            />
            <SeperatorInfo
            title={"Phone"}
            subTitle={userDetails.phone}
            />
            <SeperatorInfo
            title={"Username"}
            subTitle={userDetails.username}
            />
            <SeperatorInfo
            title={"Email"}
            subTitle={userDetails.email}
            />
            <SeperatorInfo
            title={"Address"}
            subTitle={userDetails.address?.address + " " + userDetails.address?.city+ " " +userDetails.address?.state+ ", " +userDetails.address?.postalCode}
            />
            <SeperatorInfo
            title={"Date of Birth"}
            subTitle={userDetails.birthDate}
            />
            </View>
</>
                )
            }
            
        </ScrollView>
    </View>

   
  )
}
