// Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";

// Your Realtime Database URL project config
const firebaseConfig = {
  apiKey: "AIzaSyCKXvJ_Vq8vV7PjCrEogBzRpT1RO_ranMU",
  authDomain: "fsd123-57286.firebaseapp.com",
  databaseURL: "https://fsd123-57286-default-rtdb.firebaseio.com", // ✅ Add this!
  projectId: "fsd123-57286",
  storageBucket: "fsd123-57286.appspot.com", // ✅ fixed typo here (was `.app`)
  messagingSenderId: "372291464449",
  appId: "1:372291464449:web:b1b1239ed641b13ab7ff00",
  measurementId: "G-L1ZY0WT6QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // ✅ This line connects to Realtime Database

// CREATE
function createUser() {     
  set(ref(db, 'users/user3'), {
    name: "nag",
    age: 25
  }).then(() => console.log("✅ User Created"));
}

// READ
function readUser() {
  get(ref(db, 'users/user3')).then(snapshot => {
    if (snapshot.exists()) console.log("📄", snapshot.val());
    else console.log("❌ No user found");
  });
}

// UPDATE
function updateUser() {
  update(ref(db, 'users/user2'), {
    age: 22
  }).then(() => console.log("🛠️ User Updated"));
}

// DELETE
function deleteUser() {
  remove(ref(db, 'users/user1')).then(() => console.log("🗑️ User Deleted"));
}

// 👉 Call the desired functions below to test
createUser();
readUser();
// updateUser();
// deleteUser();
