import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/nav-index";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/restaurants/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

const firebaseConfig = {
  apiKey: "AIzaSyDrAKwwuTvM7PUt9VMVb3_foqnfJG9JD6c",
  authDomain: "mealstogo-877b3.firebaseapp.com",
  projectId: "mealstogo-877b3",
  storageBucket: "mealstogo-877b3.appspot.com",
  messagingSenderId: "234719356676",
  appId: "1:234719356676:web:1e4b7d5c32153dae5a1251",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
