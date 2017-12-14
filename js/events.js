//define functions here

function getIt(){
  alert('Hey!');
}

function frameIt(){
   $('img').addClass('tasty');
}


function pressIt(){
   var pressed = 0;
   $('#typing').on('keydown', function(event) {
    if(event.which == 71){
      alert('You pressed the G key!');
      //pressed = 71;
    }
   });
/*   if(pressed = 71){

      return;
   }*/
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
   pressIt();
   submitIt());
});
