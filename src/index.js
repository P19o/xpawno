 var config = {
    apiKey: "AIzaSyDU93Y30AMkDKfCjcNEcCrxoclFM9v9SoA",
    authDomain: "xpawno-bx.firebaseapp.com",
    databaseURL: "https://xpawno-bx.firebaseio.com",
    projectId: "xpawno-bx",
    storageBucket: "xpawno-bx.appspot.com",
    messagingSenderId: "319247651116"
  };
  firebase.initializeApp(config);
var db = firebase.firestore();


$(function(){
   
   $("#nav").click(function(){
    $(".menu").toggle(

 function(){
        
        $("menu").show();
        $('#menu').animate({
           
           width: '100%'
        }, 100);
    },
    function(){
       
        $('#menu').animate({
           width: '0%'
        }, 100);     
       
});

 });

$("#back").click(function(){

	$("#tsk").html(" ");	
	$("#not").html(" ");

	$(".current").delay(400).hide();
	$("#back").hide();
	$("#nav").show();

  });

$("#tasks").click(function(){
	$("#nav").hide();
	$("#back").show();
 $('.current').show();
  $('.current').animate({
           width: '100%'
 }); 
  db.collection("data").doc("tasks")
    .onSnapshot(function(doc) {
    	$("#tsk").html(" ");
    	for (var i = 0; i < 5; i++) {
    		$("#tsk").append("<h1>", doc.data()[i], "</h1>");
    		
    	}
        console.log("xCurrent data: ", doc.data()[0]);
    });


 });


});















/*
db.collection("tasks").doc("test")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data()[1]);
    });



var washingtonRef = db.collection("tasks").doc("test");

// Set the "capital" field of the city 'DC'
washingtonRef.update({
    1: "old"
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

*/