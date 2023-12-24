import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

console.log(StatusBar.currentHeight);
export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: { padding: 16, backgroundColor: "#03936F" },
  list: { flex: 1, padding: 16, backgroundColor: "#05f5b9" },
});
