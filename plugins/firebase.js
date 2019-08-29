import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAuMJoHAyDr6cj1KP1pKWFg3iInjz45eA4",
    authDomain: "test-project-d251e.firebaseapp.com",
    databaseURL: "https://test-project-d251e.firebaseio.com",
    projectId: "test-project-d251e",
    storageBucket: "",
    messagingSenderId: "194061225937",
    appId: "1:194061225937:web:831a10582efa96a3"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();