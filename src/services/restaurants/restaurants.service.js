import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.openNow,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
