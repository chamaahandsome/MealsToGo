/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
