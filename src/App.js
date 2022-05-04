import "./App.css";
import firebase from "firebase/compat/app"; //because of version change the module location were also changed
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { ChatRoom } from "./components/ChatRoom";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";

firebase.initializeApp({
  //my config
  apiKey: "AIzaSyCUikGOiL3uX5Ij-gAmSMJ4To_DdUqkMB4",
  authDomain: "superchat2-90df7.firebaseapp.com",
  projectId: "superchat2-90df7",
  storageBucket: "superchat2-90df7.appspot.com",
  messagingSenderId: "688111557254",
  appId: "1:688111557254:web:07da40e3fb3b34d8028f07",
  measurementId: "G-YBNJB8290H",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth); //to check if the user is logged in or not
  return (
    <div className="App">
      <header></header>
      <section>
        {user ? (
          <ChatRoom firestore={firestore} />
        ) : (
          <SignIn auth={auth} firebase={firebase} />
        )}
        <SignOut auth={auth} />
      </section>
    </div>
  );
}
// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={signInWithGoogle}>Sign in with google</button>;
// }
// function SignOut() {
//   return (
//     auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
//   );
// }
// function ChatRoom() {
//   const messagesReff = firestore.collection("messages");
//   const query = messagesReff.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });
//   return (
//     <>
//       <div>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       </div>
//     </>
//   );
// }

export default App;
