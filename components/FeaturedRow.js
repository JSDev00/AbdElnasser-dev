import { Box, Flex, ScrollView, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import RestaurentCard from "./RestaurentCard";

const FeaturedRow = ({ title, description, restaurants }) => {
  return (
      <Box>
        <Flex
          px={4}
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Text fontWeight={"bold"} fontSize={20}>
              {title}
            </Text>
            <Text>{description}</Text>
          </Box>
          <Box>
            <TouchableOpacity>
              <Text fontWeight={"semibold"}>See All</Text>
            </TouchableOpacity>
          </Box>
        </Flex>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ overflow:"visible" }}
        >
          {restaurants.map((restaurant, index) => {
            return <RestaurentCard key={index} item={restaurant} />;
          })}
        </ScrollView>
      </Box>
  );
};

export default FeaturedRow;
