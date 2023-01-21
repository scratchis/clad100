
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAKFYG4rNNmHT9FAb_Qdlf6VG_pFd1_ba0",
      authDomain: "kwitter-5a52f.firebaseapp.com",
      projectId: "kwitter-5a52f",
      storageBucket: "kwitter-5a52f.appspot.com",
      messagingSenderId: "850865716731",
      appId: "1:850865716731:web:e31fafee4d60c410575f5e"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});};
getData();
function addRoom()
{
      room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roon_name",room_name);
      window.location="kwitter_page.html";
};
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
};