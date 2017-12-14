//define functions here

function getIt(){
  alert('Hey!');
}

function frameIt(){
   $('img').addClass('tasty');
}


function pressIt(){
   document.onkeydown = function(event) {
    if(event.keyCode == 71){
       alert('You pressed the G key!');
    }
   }
}

function submitIt(){
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
    return;
  }
}


$(document).ready(function(){
   $('p').on('click', getIt());
   $('img').on('load', frameIt());
   $('#typing').on('keydown', pressIt());
   $("form").on("submit",submitIt());
});
