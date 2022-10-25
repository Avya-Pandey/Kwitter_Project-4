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
//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("user_name");
document.getElementById("user name").innerHTML= "Welcome " + username +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
       
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  room_name = childKey;
 //Start code
 console.log("Room_name=" + room_name);
 row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#" + room_name +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      
      window.location= "kwitter_page.html";
}

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