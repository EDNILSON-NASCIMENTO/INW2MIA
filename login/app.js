const firebaseConfig = {
    apiKey: "AIzaSyBvEojvvRv7wQI7Vd9LHuQdpmFJnFKeNF0",
    authDomain: "projeto2miateste-82da4.firebaseapp.com",
    projectId: "projeto2miateste-82da4",
    storageBucket: "projeto2miateste-82da4.appspot.com",
    messagingSenderId: "95811845244",
    appId: "1:95811845244:web:1b6158c64e8cfb82181df9"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação : ", errorMessage)
    });
  });



  