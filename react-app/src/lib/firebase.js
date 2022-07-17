import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyDvZ-g_S_YnWryv-26zPjXZIPt0nlPqMiU",
  authDomain: "react-app-project-391c9.firebaseapp.com",
  projectId: "react-app-project-391c9",
  storageBucket: "react-app-project-391c9.appspot.com",
  messagingSenderId: "954060786715",
  appId: "1:954060786715:web:25cb68986f1d6a6040fcbe"
};

const firebasa = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;


export {  FieldValue, firebasa};
