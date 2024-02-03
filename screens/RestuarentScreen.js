import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Image, Text, ScrollView, Flex } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";

const RestuarentScreen = () => {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();

  return (
    <View>
      <CartIcon/>
      <StatusBar style="black"/>
      <ScrollView>
        <Box position={"relative"}>
          <Image size={250} w="full" source={item.image} alt="Image" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              top: 35,
              position: "absolute",
              left: 15,
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 5,
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </Box>
        <Box
          borderTopLeftRadius={40}
          borderTopRightRadius={40}
          bg={"#fff"}
          pt={6}
          mt={-12}
        >
          <Box px={5}>
            <Text fontWeight="bold" fontSize={20} >
              {item.name}
            </Text>
            <Flex direction="row" justifyContent={"space-between"}>
              <View style={{ paddingBottom: 4, paddingHorizontal: 4 }}>
                <Flex direction="row" alignItems={"center"} px={2}>
                  <Image
                    style={{ width: 12, height: 12 }}
                    alt="Image"
                    source={require("../assets/images/fullStar.png")}
                  />
                  <Text px={2}>{item.reviews}</Text>
                </Flex>
              </View>
              <View style={{ paddingBottom: 4, paddingHorizontal: 4 }}>
                <Flex direction="row" alignItems={"center"} px={2}>
                  <FontAwesome name="map-marker" size={24} color="black" />
                  <Text px={2}>Nearby {item.address}</Text>
                </Flex>
              </View>
            </Flex>
            <Text>{item.description}</Text>
          </Box>
          <View style={{ paddingBottom: 36, backgroundColor: "#fff" }}>
            <Text px={4} pt={4} bold fontSize={20}>
              MENU
            </Text>
          </View>
        </Box>
        {/* DISHES */}
        <View style={{ paddingBottom:36,backgroundColor:"#EEEDEB" }}>
          {
            item.dishes.map((dish,index)=>(<DishRow item={{ ...dish }} key={index} />))
          }
        </View>
      </ScrollView>
      </View>
  );
};

export default RestuarentScreen;

const styles = StyleSheet.create({});
