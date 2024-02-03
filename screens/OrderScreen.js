import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
       setTimeout(()=>{
        navigation.navigate("Delivery")
       },3000)
    })
  return (
    <Box safeArea flex={1} justifyContent="center" alignItems={"center"}>
      <Image size={300} source={require('../assets/images/delivery.gif')} alt="delivery"/>
    </Box>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})