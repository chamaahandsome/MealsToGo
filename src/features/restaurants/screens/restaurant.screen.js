import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LocationContext } from "../../../services/restaurants/location/location.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#00CED1" />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}

      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
