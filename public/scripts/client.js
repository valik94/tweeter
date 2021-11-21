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

 const renderTweets = function(tweets) {
  let $returnedValue;
  const result =''; 
  for (let $tweet of tweets) { // loops through tweets
     $returnedValue = createTweetElement($tweet);   // calls createTweetElement for each tweet

     result = $('#tweets-container').append($returnedValue);   // takes return value and appends it to the tweets container

   }
   return result;
}


const createTweetElement = function (tweetData) {
  //ATTEMPT 1 = FAILED
  // create a new article element
  // let $tweet = document.createElement("Article");
  // //give it some content
  // let newTime= document.createTextNode(tweetData);
  // // add the text node to the newly created div
  // $tweet.appendChild(newTime)
  // // add the newly created element and its content into the DOM
  // let currentArticle = document.getElementById("tweet-article");
  // document.body.insertBefore($tweet, currentArticle);
  // return $tweet;

let $tweet = $(`<article class="tweet">${tweetData}</article>`);

return $tweet;
}

renderTweets(data);

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
// to add it to the page so we can make sure it's got all the right elements, classes, etc.

// timeago.register('pt_BR', locale);
// timeago.render(document.querySelectorAll('.need_to_be_rendered'));
$('footer').on('keyup', function(){
    timeago.register('pt_BR', locale);
const currentTime= timeago.format(1473245023718, 'pt_BR'); 
})
});