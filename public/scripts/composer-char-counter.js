$(document).ready(function() {
    // --- our code goes here ---
    let content = '';
    let counter = $('#counter');
    let maxCharacter = 140;
    $('textarea').on('keyup', function(){
        //console.log($(this).val())
        content = $(this).val();
        let characterRemaining = maxCharacter-content.length;
        //console.log(content.length);
        counter.text(characterRemaining);
        if (characterRemaining < 0){
            counter.addClass('counter-red')
        }
        else{
            counter.removeClass('counter-red');
        }
    })
  });