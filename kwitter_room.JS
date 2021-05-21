

var firebaseConfig = {
  apiKey: "AIzaSyB_XX06J2m6FYIctJaLFYWdzCPhc_wwzLI",
  authDomain: "the-dream-smp.firebaseapp.com",
  databaseURL: "https://the-dream-smp-default-rtdb.firebaseio.com",
  projectId: "the-dream-smp",
  storageBucket: "the-dream-smp.appspot.com",
  messagingSenderId: "329579584709",
  appId: "1:329579584709:web:e4b1bfa8734c04a1c0a4ac",
  measurementId: "G-YER43TLDW4"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
