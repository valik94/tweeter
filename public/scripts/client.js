/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


const renderTweets = function(tweets) { //passed in tweets article
  let $returnedValue;
  let result =''; 
  $('#tweet-record').empty();
  for (let $tweet of tweets) { // loops through tweets
     $returnedValue = createTweetElement($tweet);   // calls createTweetElement for each tweet

     result = $('#tweet-record').prepend($returnedValue);   // takes return value and appends it to the tweets container
   }
   timeago.render(document.querySelectorAll('.need_to_be_rendered')); //render time
   return;
}


const escape = function (str) { //this is the escape XSS security function escaping <script> input tags
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const createTweetElement = function (tweetData) {
  const safeHTML = `<p>${escape(tweetData.content.text)}</p>`; //Preventing XSS with escaping using method 2
//adding new tweeter article creating and returning this from the function
  let $tweet = $(`<article class="tweet-article"> 
                      <header>
                      <img src='${tweetData.user.avatars}'/>
                      <div class="userdata">
                      <div id='nameOfUser'>${tweetData.user.name}</div> 
                      <div id='handleOfUser'>${tweetData.user.handle}</div>
                      </div>
                      ${safeHTML}
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
  return $tweet; //return tweet article created
  }


const loadTweets = function (){ 
  $.getJSON("/tweets", function(data){
    renderTweets(data); //loadTweets calls renderTweets function passing it data object

  })
}



$(document).ready(function() {

loadTweets(); 

$('footer').on('keyup', function(){
const currentTime= timeago.format(Date.now(), 'en_US');  //creating current time
})
});