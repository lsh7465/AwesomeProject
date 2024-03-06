// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHI_c77A3TQ2AClvOVasUxG7d7m4wQco",
  authDomain: "react-native-todo-app-bd18f.firebaseapp.com",
  projectId: "react-native-todo-app-bd18f",
  storageBucket: "react-native-todo-app-bd18f.appspot.com",
  messagingSenderId: "391038102152",
  appId: "1:391038102152:web:a9ad568aa5427aa18fcd3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
