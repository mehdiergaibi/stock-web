import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUb5iYFQJuPZnUftxg3e8aBWejhBhZLW4",
  authDomain: "stock-1c747.firebaseapp.com",
  projectId: "stock-1c747",
  storageBucket: "stock-1c747.appspot.com",
  messagingSenderId: "764117909466",
  appId: "1:764117909466:web:194f30da9bb23a7bc08ae3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
