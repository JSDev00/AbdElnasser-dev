import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
const navigation = useNavigation()
  return (
    <View
      style={{
        marginLeft: 20,
        position: "absolute",
        bottom: 5,
        width: "90%",
        zIndex: 55,
      }}
    >
      <TouchableOpacity
      onPress={()=>navigation.navigate("Cart")}
        style={{
          backgroundColor: "#19253D",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 18,
          borderRadius: 20,
        }}
      >
        <Box
          p={2}
          px={4}
          borderRadius={"30"}
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text color="#fff" bold textAlign={"center"} fontSize={15}>
            3
          </Text>
        </Box>

        <Text color="#fff" bold textAlign={"center"} fontSize={15}>
          View Cart
        </Text>
        <Text color="#fff" bold textAlign={"center"} fontSize={15}>
          $23 
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
