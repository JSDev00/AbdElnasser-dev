import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Text, Box, Flex } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RestaurentCard = ({ item }) => {
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('Rest',{...item})}
    >
      <View
        style={{
          marginTop: 8,
          marginRight: 6,
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      >
        <Image
          style={{ width: "100%", height: 128, borderRadius: 15 }}
          source={item.image}
        />
        <View style={{ paddingBottom: 4, paddingHorizontal: 4 }}>
          <Text px={2} bold>
            {item.name}
          </Text>
          <Flex direction="row" alignItems={"center"} px={2}>
            <Image
              style={{ width: 12, height: 12,resizeMode:"cover" }}
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurentCard;

const styles = StyleSheet.create({});
