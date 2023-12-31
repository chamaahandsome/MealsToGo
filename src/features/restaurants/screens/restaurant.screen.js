import React, { useContext } from "react";
import styled from "styled-components/native";

import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { Search } from "../components/search.component";

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#00CED1" />
      </LoadingContainer>
    );
  }

  return (
    <SafeArea>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="small">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
