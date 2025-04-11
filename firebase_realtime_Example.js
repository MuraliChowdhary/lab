// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,get,update,remove } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYGNLvWPEzochp6M7abZGF7K2mbEXBFfw",
  authDomain: "fsd1234-3d46a.firebaseapp.com",
  databaseUrl:"https://fsd1234-3d46a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fsd1234-3d46a",
  storageBucket: "fsd1234-3d46a.firebasestorage.app",
  messagingSenderId: "537684089045",
  appId: "1:537684089045:web:584a6121107415b90cea5c",
  measurementId: "G-PNQNTZQKTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app); 


// CREATE
function createUser() {
  set(ref(db, 'users/user5'), {
    name: "Nag",
    age: 22
  }).then(() => console.log("✅ User Created"));
}

// READ
function readUser() {
  get(ref(db, 'users/user1')).then(snapshot => {
    if (snapshot.exists()) console.log("📄", snapshot.val());
    else console.log("❌ No user found");
  });
}

// UPDATE
function updateUser() {
  update(ref(db, 'users/user1'), {
    age: 22
  }).then(() => console.log("🛠️ User Updated"));
}

// DELETE
function deleteUser() {
  remove(ref(db, 'users/user1')).then(() => console.log("🗑️ User Deleted"));
}

// 👉 Call the desired functions below to test
createUser();
// readUser();
//  updateUser();
// deleteUser();
