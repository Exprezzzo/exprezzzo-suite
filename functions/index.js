const functions = require("firebase-functions");
const { businessGateway } = require("./businessGateway");
const { createTenant } = require("./tenantManagement");

exports.businessGateway = businessGateway;
exports.createTenant = functions.https.onCall(createTenant);
