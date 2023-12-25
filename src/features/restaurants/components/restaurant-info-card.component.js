import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  backgroundcolor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Kibandaski",
    icon,
    photos = [
      "https://www.simplybeefandlamb.co.uk/media/1448/authentic-beef-curry-web_1.jpg?width=1600&height=900&mode=crop",
    ],
    address = "100 somewhere home",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
