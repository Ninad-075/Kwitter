
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyD_JoVRhG1lewy_-Jguu8PErjnxdJ-hHbo",
      authDomain: "kwitter-new-90ce6.firebaseapp.com",
      projectId: "kwitter-new-90ce6",
      storageBucket: "kwitter-new-90ce6.appspot.com",
      messagingSenderId: "22738935156",
      appId: "1:22738935156:web:5ea8a36ec3b05bf962a021"
    };

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + "onClick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg.html"
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_msg.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}