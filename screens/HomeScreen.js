import { Box, HStack, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import Category from '../components/Category';
import FeaturedRow from '../components/FeaturedRow';
import { featured, featuredd, featureddd } from '../constants';
const HomeScreen = () => {
  return (
    <Box safeAreaTop>
      {/* Header */}
      <HStack alignItems={"center"} justifyContent={"space-between"} px={4} pt={4}>
        <VStack>
            <Text bold fontSize={30}>Daily</Text>
            <Text bold fontSize={30}>Grocery Food</Text>
        </VStack>
        <Feather name="search" size={24} color="black" />
      </HStack>
    {/* Items */}
    <ScrollView contentContainerStyle={{ paddingBottom:140,marginBottom:50 }} showsVerticalScrollIndicator={false}>
        {/* Category */}
        <Category/>
        {
            [featured,featuredd,featureddd].map((item,index)=>{
                return(
                    <FeaturedRow
                    title={item.title}
                    description={item.description}
                    key={index}
                    restaurants={item.restaurants}
                    />
                )
            })
        }
    </ScrollView>
    </Box>
  )
}

export default HomeScreen
