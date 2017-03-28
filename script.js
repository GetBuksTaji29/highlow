
// JavaScript File

$(document).ready(function(){
 var secretnumber = "13";
 
$("button").click(function() {


if (secretnumber === $("#input").val()){
  $("h1").append("congratulations Thats The Correct Number!!!!!!");
}

//var name = $("#input").val();
});
});