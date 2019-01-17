var mainText = document.getElementById("mainText");
var mainText2 = document.getElementById("mainText2");
var mainText3 = document.getElementById("mainText3");
var submitBtn = document.getElementById("submitBtn");
function submitClick()
{
/*	
	var firebaseRef = firebase.database().ref();
	firebaseRef.set("Text");
	firebaseRef.child("Text").set("Some Value");
	By TVAC
*/	
	
	/*
	var val = document.getElementById("mainText").value;
	var val2 = document.getElementById("mainText2").value;
	window.alert(val);
	var firebaseRef = firebase.database().ref();
	firebaseRef.set(val);
	firebaseRef.child(val).set(val2);
	//By Mad Developer*/

	var val = document.getElementById("mainText").value;
	var val2 = document.getElementById("mainText2").value;
	var val3 = document.getElementById("mainText3").value;
	window.alert(val);
	var firebaseRef = firebase.database().ref('message');
	var newmessageRef = firebaseRef.push();
	newmessageRef.set({
		name:val,
		email:val2,
		address:val3
	});
}