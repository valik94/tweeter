/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// import * as timeago from 'timeago.js';

// $(document).body.onload = createTweetElement;
// Test / driver code (temporary). Eventually will get this from the server.


$(document).ready(function() {


const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

 const renderTweets = function(tweets) { //passed in tweets array
  let $returnedValue;
  let result =''; 
  for (let $tweet of tweets) { // loops through tweets
     $returnedValue = createTweetElement($tweet);   // calls createTweetElement for each tweet

     result = $('#tweet-record').append($returnedValue);   // takes return value and appends it to the tweets container
    //console.log(result);
   }
   return;
}


const createTweetElement = function (tweetData) {


let $tweet = $(`<article class="tweet-article">
                    <header>
                    ${tweetData.content.text}
                    </header>
                    <footer>
                      <span class="need_to_be_rendered" datetime= "${new Date(tweetData.created_at).toDateString()}">2016-07-07</span>
                      <div>
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                      </div>
                    </footer>
                </article>`);
console.log(new Date(tweetData.created_at).toDateString());
console.log($tweet.get());
return $tweet;
}

renderTweets(data);
timeago.render(document.querySelectorAll('.need_to_be_rendered'));


// timeago.register('pt_BR', locale);
// timeago.render(document.querySelectorAll('.need_to_be_rendered'));
$('footer').on('keyup', function(){
const currentTime= timeago.format(Date.now(), 'en_US'); 
})
});