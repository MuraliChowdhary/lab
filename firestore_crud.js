// Import Firestore modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Config
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

// Init Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create
//realtime database
 

// firestore database
async function createUser() {
  await setDoc(doc(db, "users", "user2"), {
    name: "Nikhitha",
    age: 27
  });
  console.log("✅ Firestore User Created");
}

// Read
async function readUser() {
  const docSnap = await getDoc(doc(db, "users", "user1"));
  if (docSnap.exists()) console.log("📄", docSnap.data());
  else console.log("❌ No data found");
}

// Update
async function updateUser() {
  await updateDoc(doc(db, "users", "user1"), {
    age: 23
  });
  console.log("🛠️ Firestore User Updated");
}

// Delete
async function deleteUser() {
  await deleteDoc(doc(db, "users", "user1"));
  console.log("🗑️ Firestore User Deleted");
}

// Call functions here
createUser();
// readUser();
// updateUser();
// deleteUser();
