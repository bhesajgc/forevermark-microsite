import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyBUEIZn9uiw6g0X562t9U8xyGNKI-EcuFs",
//   authDomain: "forevermark-forum-b2944.firebaseapp.com",
//   databaseURL: "https://forevermark-forum-b2944.firebaseio.com",
//   projectId: "forevermark-forum-b2944",
//   storageBucket: "forevermark-forum-b2944.appspot.com",
//   messagingSenderId: "8541326900",
//   appId: "1:8541326900:web:889bbc59cff196801d8461",
//   measurementId: "G-0Q0NDC42YF",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBgpS3rV3_N9XuF9xZd8aCMG8W4ep2lCuc",
  authDomain: "forevermarkforum2021.firebaseapp.com",
  projectId: "forevermarkforum2021",
  storageBucket: "forevermarkforum2021.appspot.com",
  messagingSenderId: "347127630101",
  appId: "1:347127630101:web:917c5c7595ff18ab2cc11c",
  measurementId: "G-ZQGVF7T9EQ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
// auth.settings.isAppVerificationDisabledForTesting = true
export { db, auth };
