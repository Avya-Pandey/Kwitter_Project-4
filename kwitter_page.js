const firebaseConfig = {
    apiKey: "AIzaSyAMZe902tM6uSQuQGxl6iF2SvoJfof85R8",
    authDomain: "kwitternew-e4f96.firebaseapp.com",
    databaseURL: "https://kwitternew-e4f96-default-rtdb.firebaseio.com",
    projectId: "kwitternew-e4f96",
    storageBucket: "kwitternew-e4f96.appspot.com",
    messagingSenderId: "709579725729",
    appId: "1:709579725729:web:640d013fe8f44c9cf409e0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
  
  function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function home()
{
    window.location = "kiwtter_room.html";
    localStorage.removeItem("room_name");
}

function logout()
{
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
          window.location = "index.html";
}

