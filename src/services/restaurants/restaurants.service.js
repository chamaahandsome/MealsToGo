import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(
    `http://localhost:5001/mealstogo-b2612/us-central1/placesNearby?location=${location}`
  ).then((res) => {
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
