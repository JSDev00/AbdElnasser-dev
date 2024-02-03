import { Box, Flex, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { categories } from "../constants";

const Category = () => {
  // Active BG
  const [activeColor, setActiveColor] = useState(null);
  return (
    <Box mt={5} mb={5}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {/* Category */}

        {categories.map((i, idx) => {
          const isActive = i.id === activeColor;
          const btnClass = isActive ? "#19253D" : "#D8DADD";
          const textClass = isActive ? "bold" : "light";
          return (
            <Flex key={idx} justifyContent={"center"} alignItems="center" mr={6}>
              <TouchableOpacity
                onPress={() => setActiveColor(i.id)}
                style={{
                  backgroundColor: btnClass,
                  padding: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                }}
              >
                <Image source={i.image} alt="Image" style={{width:60,height:60,resizeMode:"contain"}} />
                <Text color={"#fff"} fontWeight={textClass} textAlign="center">
                  {i.name}
                </Text>
              </TouchableOpacity>
            </Flex>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default Category;
