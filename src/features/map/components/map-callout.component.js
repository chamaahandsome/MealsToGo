import React from "react";
import styled from "styled-components/native";

const MyText = styled.Text`
  color: red;
`;

export const MapCallout = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
