import "./App.css";
import firebase from "firebase/compat/app"; //because of version change the module location were also changed
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatRoom } from "./components/ChatRoom";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import { useState } from "react";

firebase.initializeApp({
  //my config
  apiKey: "AIzaSyD3InY2-z9qzcDdCMrDJW4rrPud4p9vBwQ",
  authDomain: "maaachat-b71b6.firebaseapp.com",
  projectId: "maaachat-b71b6",
  storageBucket: "maaachat-b71b6.appspot.com",
  messagingSenderId: "913133526199",
  appId: "1:913133526199:web:5b3f8411078b70a5df0132",
  measurementId: "G-XJEQJK2VJZ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

//to create each message and add the collection in the firebase
const messageRef = firestore.collection("messages");
const query = messageRef.orderBy("createdAt").limit(1000);

function App() {
  const [user] = useAuthState(auth); //to check if the user is logged in or not
  return (
    <div className="App">
      <SignOut auth={auth} />
      <header></header>
      <section>
        {user ? (
          <ChatRoom
            messageRef={messageRef}
            query={query}
            auth={auth}
            firebase={firebase}
          />
        ) : (
          <SignIn auth={auth} firebase={firebase} />
        )}
      </section>
    </div>
  );
}

export default App;
