import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Flex, Text, Image } from 'native-base'
import { Entypo } from '@expo/vector-icons';
const DishRow = ({item}) => {
  return (
    <Flex direction='row' alignItems={'center'} bg="#fff" p={2} mx={2} mb={3} >
      <Image source={item.image} size={150} borderRadius={15} alt={item.name}/>
            <View style={{ display:"flex",flex:1,paddingTop:1 }}>
                <View style={{ paddingLeft:3,paddingBottom:5 }}>
                    <Text fontSize={20} bold>{item.name}</Text>
                    <Text>{item.description}</Text>
                </View>
                <Flex mt={4} direction='row' alignItems={'center'} justifyContent='space-between'>
                  <Text fontSize={15} bold px={2}>${item.price}</Text>
                  <Flex alignItems={'center'} direction='row'>
                    <TouchableOpacity>
                    <Entypo name="circle-with-minus" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text px={2}>{2}</Text>
                    <TouchableOpacity>
                    <Entypo name="circle-with-plus" size={24} color="#000" />
                    </TouchableOpacity>
                  </Flex>
                </Flex>
            </View>
    </Flex>
  )
}

export default DishRow
