$(function () {
  const $form = $('form');
  $('.error-message').hide();
  $form.submit(function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
        const content =  $('textarea').val(); 
    console.log(content.length);
    if (content.length >= 140){ //regular character input validation
        $('.error-message').html('<i class="fas fa-exclamation-triangle"></i> Too long. Please respect our arbitrary counter limit of 140 <i class="fas fa-exclamation-triangle"></i>');
        $('.error-message').slideDown();
    }
    else if (content.length === 0){ //input validation for empty input
      $('.error-message').html('<i class="fas fa-exclamation-triangle"></i> Please don\'t submit blank a tweet <i class="fas fa-exclamation-triangle"></i>');
      $('.error-message').slideDown();
    }
    else {
    //perform jQuery ajax POST request in event of proper input
    $.ajax({ method: 'POST', url: '/tweets', data: $(this).serialize() })
      .then(function (event) {
        let tweetTextArea=$('#tweet-text');
        tweetTextArea.val(""); //reset text area
        let counter = $('#counter');
        counter.text(140);
        loadTweets();
        console.log('Success: ', event);

        //return;
      });
    }
  });
});
