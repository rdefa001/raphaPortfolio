$(document).ready(() => { 
  $('#about').on('click', () => {
     $('.bio').toggle();
      $('.about-Me').toggle();
  })
    
    //will generate a count on how many words still available to type
     $('.messagebtn').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
         
    //will make frase turn red when count is equal or less than 0     
    if(remaining <=0) {
     $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
         
    $('.characters').html(remaining);
  })
  $('.messagebtn').focus();
}); 


var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        
        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest('.modal').style.display = 'none';
    };
});

window.onclick = function(e){
    if(e.target.className === "modal"){
        e.target.style.display ='none';
    };
};