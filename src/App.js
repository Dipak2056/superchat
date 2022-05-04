import "./App.css";
import firebase from "firebase/compat/app"; //because of version change the module location were also changed
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatRoom } from "./components/ChatRoom";
import { SignIn } from "./components/SignIn";

firebase.initializeApp({
  //my config
  apiKey: "AIzaSyDztDOzroiG5S_22YQkdqyUthPCnt8ad0A",
  authDomain: "superchat-3ffbe.firebaseapp.com",
  projectId: "superchat-3ffbe",
  storageBucket: "superchat-3ffbe.appspot.com",
  messagingSenderId: "1021874910622",
  appId: "1:1021874910622:web:79fe819992939ea927928f",
  measurementId: "G-FSF4JBF7CJ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  const [user] = useAuthState(auth); //to check if the user is logged in or not
  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
