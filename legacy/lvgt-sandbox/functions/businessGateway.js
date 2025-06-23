const functions = require("firebase-functions");

exports.businessGateway = functions.https.onRequest((req, res) => {
  const tenantId = req.path.split('/')[2];
  res.send(`Business Gateway active for tenant: ${tenantId}`);
});
