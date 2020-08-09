import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcccyw4jXmdT0riVfjS2sTlQBjwX3CV28",
    authDomain: "threelittlepigsv2.firebaseapp.com",
    databaseURL: "https://threelittlepigsv2.firebaseio.com",
    projectId: "threelittlepigsv2",
    storageBucket: "threelittlepigsv2.appspot.com",
    messagingSenderId: "641647568578",
    appId: "1:641647568578:web:e6a8aad5da70ee50a03d5b",
    measurementId: "G-P733NVME2Y"
};

const fire = firebase.initializeApp(config);

export default fire;