const firebaseConfig = {
    apiKey: "AIzaSyBArmmVkskxqx5YNRpI6JqVcMvZDG6kMz0",
    authDomain: "kwitter-8b1b4.firebaseapp.com",
    databaseURL: "https://kwitter-8b1b4-default-rtdb.firebaseio.com",
    projectId: "kwitter-8b1b4",
    storageBucket: "kwitter-8b1b4.appspot.com",
    messagingSenderId: "481579255987",
    appId: "1:481579255987:web:7e60fffb9b641f571fc8c6"
  };
  
firebase.initializeApp(firebaseConfig);


function addroom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
}

function logout()
{
window.location ="index.html";
}

