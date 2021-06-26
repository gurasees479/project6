// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYgfRWXVh4xLf2CUsLb89AMl6hDTy-dgQ",
      authDomain: "kwitter-e318b.firebaseapp.com",
      databaseURL: "https://kwitter-e318b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e318b",
      storageBucket: "kwitter-e318b.appspot.com",
      messagingSenderId: "634559140282",
      appId: "1:634559140282:web:06b41ed29909b05db18d83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
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
      window.location = "kwitter_page.html";
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}