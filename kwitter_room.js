
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDT07eu12_ZGiMMNfILHwbkGm5CIofDMCU",
      authDomain: "kwitter-62eb2.firebaseapp.com",
      databaseURL: "https://kwitter-62eb2-default-rtdb.firebaseio.com",
      projectId: "kwitter-62eb2",
      storageBucket: "kwitter-62eb2.appspot.com",
      messagingSenderId: "574112249991",
      appId: "1:574112249991:web:e003633048c9495e75e022"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name is " + Room_names);
      room = "<div class='room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + " </div> <hr>";
      document.getElementById("output").innerHTML += room;
      //End code
      });});}
getData(); 

function addroom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "window_page.html";
    
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}