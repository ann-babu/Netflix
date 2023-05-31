import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4ZzWIMjOIs_ZYolLEpPhIGDiuMgHpuHU",
    authDomain: "fir-dceab.firebaseapp.com",
    projectId: "fir-dceab",
    storageBucket: "fir-dceab.appspot.com",
    messagingSenderId: "865993177468",
    appId: "1:865993177468:web:93bb32d50d88ea49864cf9",
    measurementId: "G-6G8XS929W4"
  };

  export const Firebase=firebase.initializeApp(firebaseConfig)