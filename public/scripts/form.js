$(function () {
  const $form = $('form');
  $form.submit(function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    const content = $('textarea').val();
    console.log(content);
    if (content.length >= 140){
        alert(`tweet is ${content.length} characters long, use 140 as allowable limit`);
    }
    else if (!content){
        alert(`tweet is empty, please enter something to tweet.`);
    }
else {
    $.ajax({ method: 'POST', url: '/tweets', data: $(this).serialize() })
      .then(function (event) {
        let tweetRecord = $('#tweet-record');
        tweetRecord.empty();
        loadTweets();
        console.log('Success: ', event);
        return;
      
      });
    }
  });

});
