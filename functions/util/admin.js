const admin = require('firebase-admin');

const serviceAccount = require('../tutorial-moive-firebase-adminsdk-j58d4-220b230139.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tutorial-moive.firebaseio.com"
  });

const db = admin.firestore();

module.exports = { admin , db };