function postTweetHandler(e){
  e.preventDefault();
  var writeTweet = {message: $('#tweet-text').val()};
  $("#tweet-text").val("");
  writeTweet.user = visitor;
  writeTweet.created_at = new Date();
  streams.home.push(writeTweet);
  $('.container').prepend('<div class="tweet"><p>' + writeTweet.message + '</p></div>');
};

$(document).ready(function(){
  var $body = $('body');
  //$body.html('');

  //When the Write Tweet Button is pushed the postTweetHandler function is called
  $('#tweet-btn').on('click', postTweetHandler);


  $('button').on('click', function() {
    var buttonClick = $(this).closest('button');
    var index = streams.home.length - 1;
    $('.container').children('.tweet').remove();
    
    while(index >= 0){
      var tweet = streams.home[index];
      var user = tweet.user;
      var tweetMessage = tweet.message;
      var tweetTime = tweet.created_at;
      //var $user = $('<a>/<a>');
      var $tweet = $('<div class="tweet"></div>');
      var $tweetAnchorElement = $('<a href="#" class="user"></a>');
      var $tweetParagraphElement = $('<p></p>');
      var $tweetTimeTag = $('<p class="day-time"></p>');
      //$tweet.text('@' + tweet.user + ': ' + tweet.message + ' Created at: ' + tweet.created_at');
      
      $tweetAnchorElement.append("@" + user);
      $tweet.append($tweetAnchorElement);    
      
      $tweetParagraphElement.append(': ' + tweet.message);
      $tweet.append($tweetParagraphElement);
      
      $tweetTimeTag.append(tweetTime);
      $tweet.append($tweetTimeTag);
           
      //$user.appendTo($tweet);
      $('.container').append($tweet);
      
      index -= 1;

    }

    $('.user').on('click', function(event) {
        event.preventDefault();
        // var tweet = streams.home[index];
        // console.log(streams.home[index])
        // console.log(tweet.user);
        $('.users-container').fadeIn(400);
        var userClassTag = $(this).closest('.user').text().toString();
        var userName = userClassTag.substring(1, userClassTag.length);
        var index = streams.users[userName].length - 1;
        $('.users-container').children('.sub-tweet').remove();
        
        while (index > 0) {
          var usersMessages = streams.users[userName][index].message;
          var $usersTweets = $('<div class="sub-tweet"></div>');
//          console.log("Message: ", usersMessages);
          
          $usersTweets.append('<p>' + userClassTag + ": " + usersMessages + '</p>');
//          console.log($usersTweets);
          $('.users-container').append($usersTweets);

          index -= 1;
        }
        //console.log(typeof userName);
//        console.log("username: " + userClassTag + " username: " + userName);
        
    }); //end of show users tweet function

  }); // end of Refresh Click Button function


}); // end of document.ready() function