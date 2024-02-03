import React from 'react'
import MapView , {Marker} from 'react-native-maps';
import {Text, Box, Flex, Image } from 'native-base';
import {TouchableOpacity, View} from 'react-native'
import { AntDesign , Ionicons } from '@expo/vector-icons';
const DeliveryScreen = ({navigation}) => {
  return (
    <Box flex={1} safeArea>
    <MapView
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={{ display:"flex",flex:1 }}
  mapType="standard"
>
<Marker
  coordinate={{ 
    latitude: 37.78825,
    longitude: -122.4324,
   }}
   title="Egypt"
   description='Abdelnasser Ahmed😎'
   pinColor='green'
/>

</MapView>
<Box borderRadius={20} bg="#fff" position={'relative'}>
  <Flex direction='row' justifyContent={'space-between'} px={5} pt={10}>
    <Box>
      <Text fontSize={20} bold>Estimated Arrival</Text>
      <Text fontSize={30} bold>15 - 20 Minutes</Text>
      <Text fontSize={15} mt={2} mb={2}>your order is own its way</Text>
    </Box>
    <Image alt="Image" source={require('../assets/images/bikeGuy2.gif')} size={120}/>
  </Flex>
</Box>
   <Flex bg="#19253D" direction='row' p={2} justifyContent="space-between" alignItems={'center'} borderRadius="35" my={5} mx={2}>
    <View>
      <Image style={{ width:60,height:60,borderRadius:50 }} source={require('../assets/images/deliveryGuy.png')}  alt="image" size={100}/>
      </View>
      <View style={{ flex:1 , marginLeft:3 }} >
      <Text bold color="#fff">Abdelnasser</Text>
      <Text color="#fff">Your Rider</Text>
      </View>
      <Flex direction='row' alignItems={'center'}>
          <TouchableOpacity style={{marginRight:5, backgroundColor:"#fff",padding:5,borderRadius:50 }}>
              <AntDesign  name="phone" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{ backgroundColor:"#fff",padding:5,borderRadius:50 }}>
          <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
      </Flex>
   </Flex>
</Box>
  )
}

export default DeliveryScreen
