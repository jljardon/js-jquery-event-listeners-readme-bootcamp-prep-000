//define functions here

function getIt(){
  alert('Hey!');
}

function frameIt(){
   $('img').addClass('tasty');
}

function pressIt(){
   $(document).on('keydown', function(key) {
      if(key.which == 71){
      alert('s was pressed');
      }
   });
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
});
