/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// import * as timeago from 'timeago.js';

// $(document).body.onload = createTweetElement;
// Test / driver code (temporary). Eventually will get this from the server.


const renderTweets = function(tweets) { //passed in tweets array
  let $returnedValue;
  let result =''; 
  for (let $tweet of tweets) { // loops through tweets
     $returnedValue = createTweetElement($tweet);   // calls createTweetElement for each tweet

     result = $('#tweet-record').append($returnedValue);   // takes return value and appends it to the tweets container
    //console.log(result);
   }
   timeago.render(document.querySelectorAll('.need_to_be_rendered'));
   return;
}


const createTweetElement = function (tweetData) {


  let $tweet = $(`<article class="tweet-article">
                      <header>
                      ${tweetData.content.text}
                      </header>
                      <footer>
                        <span class="need_to_be_rendered" datetime= '${new Date(tweetData.created_at).toISOString()}'>${new Date(tweetData.created_at).toISOString()}</span>
                        <div>
                            <i class="fas fa-flag"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                  </article>`);
  
  console.log(new Date(tweetData.created_at).toISOString());
  console.log($tweet.get());
  return $tweet;
  }


const loadTweets = function (){
  $.getJSON("/tweets", function(data){
    renderTweets(data);

  })
  // let parsedData = $.parseJSON();
}

$(document).ready(function() {

loadTweets();


// timeago.register('pt_BR', locale);
// timeago.render(document.querySelectorAll('.need_to_be_rendered'));
$('footer').on('keyup', function(){
const currentTime= timeago.format(Date.now(), 'en_US'); 
})
});