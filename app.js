// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1FNz8Re8_quooU43WmrWLk1ghab3qk0s",
    authDomain: "migosplus1.firebaseapp.com",
    databaseURL: "https://migosplus1.firebaseio.com",
    projectId: "migosplus1",
    storageBucket: "migosplus1.appspot.com",
    messagingSenderId: "139114129417"
  };

  // Initialize your Firebase app
  firebase.initializeApp(config);

  // Reference to the recommendations object in your Firebase database
  var users = firebase.database().ref("User");



  // Save a new recommendation to the database, using the input in the form
  var submitUser = function () {

    // Get input values from each of the form elements
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var license = $("#license").val();
    // Push a new recommendation to the database using those values
    users.push({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "phone" : phone,
      "license" : license
    });
  };

  // When the window is fully loaded, call this function.
  // Note: because we are attaching an event listener to a particular HTML element
  // in this function, we can't do that until the HTML element in question has
  // been loaded. Otherwise, we're attaching our listener to nothing, and no code
  // will run when the submit button is clicked.
  $(window).load(function () {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $("#newUser").submit(submitUser);

  });

users.limitToLast(1).on('child_added', function(childSnapshot){
    user = childSnapshot.val();

    $("#firstName").html(user.firstName)
    $("#lastName").html(user.lastName)
    $("#email").html(user.email)
    $("#phone").html(user.phone)
    $("#license").html(user.license)

});
