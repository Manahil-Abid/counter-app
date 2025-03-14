
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAto4qTD_QpyXBwf77_DrBWf1mFOS74chA",
    authDomain: "database-c48e9.firebaseapp.com",
    databaseURL: "https://database-c48e9-default-rtdb.firebaseio.com",
    projectId: "database-c48e9",
    storageBucket: "database-c48e9.firebasestorage.app",
    messagingSenderId: "1043413243960",
    appId: "1:1043413243960:web:6c1861eef38d17fb81eecd",
    measurementId: "G-SSZ30RC8XR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  const counterRef = ref (db, "counter");

  function updatedCounter(value){
    set( counterRef , value)
  }

  document.getElementById("increment").addEventListener("click" , (e) =>{
e.preventDefault();
let count = Number(document.getElementById("counter").innerText);
updatedCounter( count + 1);
  });

document.getElementById("decrement").addEventListener("click" , (e) =>{
    e.preventDefault();
    let count = Number(document.getElementById("counter").innerText);
    updatedCounter( count - 1);
 });

 onValue( counterRef , function (snapshot){
    document.getElementById("counter").innerText = snapshot.val();
 });

function reset() {
  count = 0;
  document.getElementById("counter").textContent = count;
}
