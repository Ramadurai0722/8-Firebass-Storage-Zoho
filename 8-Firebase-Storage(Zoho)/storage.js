(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyBQHaWG4j5L6KXy4yzZSyxXsQMTBfoUwzM",
        authDomain: "courseo-63e86.firebaseapp.com",
        databaseURL: "https://courseo-63e86-default-rtdb.firebaseio.com",
        projectId: "courseo-63e86",
        storageBucket: "courseo-63e86.appspot.com",
        messagingSenderId: "68131194454",
        appId: "1:68131194454:web:bfd1bd01a26ebdd4f09df7"
      };

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    //create a root refernce
    var storage = firebase.storage()
    var storageRef = storage.ref()

    // get UI elements
    const file = document.getElementById('file');
    const upload = document.getElementById('upload');
    const download = document.getElementById('download');
    const status = document.getElementById('status');
    const image = document.getElementById('image');

    // upload file
    upload.addEventListener('click', e =>{
        var ref= storageRef.child('globe');
        let photo = document.getElementById("file").files[0];

        //upload
        ref.put(photo).then(function(snapshot){
            console.log('uploaded a blob or file');
            status.innerHTML = 'upload a blob or file!'
        })
    })

    // download file
    download.addEventListener('click',e =>{
        var ref =storage.ref('globe');

        ref.getDownloadURL().then(function(url){
            image.src = url;
            status.innerHTML = 'Download blob or file'
        }).catch(function(error){console.log(error)})
    })


}());