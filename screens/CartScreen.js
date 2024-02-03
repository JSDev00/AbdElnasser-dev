import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Text,
  Box,
  Center,
  Image,
  ScrollView,
  HStack,
  VStack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { featured } from "../constants";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CartScreen = () => {
  const rest = featured.restaurants[0];
  const navigation = useNavigation()
  return (
    <Box flex={1}>
      <Box
        safeArea
        flexDirection={"row"}
        alignItems="center"
        justifyContent="space-between"
        mt={3}
      >
        <StatusBar color="#000" />
        <View style={{}}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              backgroundColor: "#19253D",
              borderRadius: 50,
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 50 }}>
          <Center>
            <Text bold fontSize={15}>
              Your Cart
            </Text>
            <Text fontSize={15}>{rest.name}</Text>
          </Center>
        </View>
        <View></View>
      </Box>
      <Box
        mt={6}
        px={2}
        bg={"#DCF2F1"}
        flexDirection="row"
        alignItems={"center"}
      >
        <Image
          alt="Delivery Image"
          size={120}
          source={require("../assets/images/1.png")}
        />
        <Text flex={1}>Delivery In 20 - 30 minute</Text>
        <TouchableOpacity>
          <Text px={2}>Change</Text>
        </TouchableOpacity>
      </Box>
      {/* dishes */}
      <ScrollView>
        {rest.dishes.map((dish, index) => (
          <Box
            key={index}
            px={4}
            mt={4}
            mx={2}
            borderRadius={20}
            bg={"#DCF2F1"}
            flexDirection="row"
            alignItems={"center"}
          >
            <Text>2x</Text>
            <Image
              alt="Dish Image"
              size={120}
              source={require("../assets/images/1.png")}
            />
            <Text flex={1} px={2}>
              {dish.name}
            </Text>
            <Text px={2}>10$</Text>
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
          </Box>
        ))}
      </ScrollView>
      {/* totals */}

      <Box bg={"#19253D"} borderTopLeftRadius={20} borderTopRightRadius={20}>
        <VStack space={2}>
          <HStack space={3} justifyContent="space-between" px={5}>
            <Text color="#fff">SubTotal</Text>
            <Text  color="#fff">$20</Text>
          </HStack>
          <HStack space={3} justifyContent="space-between" px={5}>
            <Text color="#fff">Deliver</Text>
            <Text color="#fff">$2</Text>
          </HStack>
          <HStack space={3} justifyContent="space-between" px={5}>
            <Text bold color="#fff">OrderTotal</Text>
            <Text bold color="#fff">$22</Text>
          </HStack>
        </VStack>
        <VStack px={5}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("OrderPreparing")}
            style={{
              backgroundColor: "#fff",
              marginBottom: 15,
              borderRadius: 25,
              padding: 15,
            }}
          >
            <Text color="#19253D" bold style={{ textAlign: "center" }}>
              Place An Order
            </Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Box>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
