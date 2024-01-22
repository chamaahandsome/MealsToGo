import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../utils/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Kibandaski: "fast-food-sharp",
  Map: "map",
  Settings: "settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#00CED1",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen
      name="Kibandaski"
      component={RestaurantsNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
