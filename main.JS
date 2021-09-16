const firebaseConfig = {
    apiKey: "AIzaSyDSTXpdiK68Z4QfuPKwmFM3OVrIDDCEMFQ",
    authDomain: "ugh-practice.firebaseapp.com",
    databaseURL: "https://ugh-practice-default-rtdb.firebaseio.com",
    projectId: "ugh-practice",
    storageBucket: "ugh-practice.appspot.com",
    messagingSenderId: "861504010536",
    appId: "1:861504010536:web:019051f75b1daa2957b81d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser(){
    var username=document.getElementById("Username").value;
firebase.database().ref("/").child(Username).update({
purpose:"addingUser"    
});
  }