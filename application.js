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
      //$tweet.text('@' + tweet.user + ': ' + tweet.message + ' Created at: ' + tweet.created_at');
      
      $tweet.append(index + ' <a href="#" class="user">@' + user + '</a>');
      $tweet.append('<p>' + ': ' + tweet.message + '</p>');
      //$user.text(' !@' + tweet.user);
      //console.log($user);
      
      //$user.appendTo($tweet);
      $('.container').append($tweet);
      //$tweet.remove('body').children('li');

      
      //$("#content ul").append("<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>");
      //This removes all the text from the body, but its still keeping it
      //in order with the timestamps.
      //$('body').children('li').remove();
      index -= 1;

    }

    $('.user').on('click', function(event) {
        event.preventDefault();
        // var tweet = streams.home[index];
        // console.log(streams.home[index])
        // console.log(tweet.user);
        var userClassTag = $(this).closest('.user').text().toString();
        var userName = userClassTag.substring(1, userClassTag.length);
        var index = streams.users[userName].length - 1;
        
        while (index > 0) {
          var usersMessages = streams.users[userName][index].message;
          var $usersTweets = $('<div class="sub-tweet">');
          console.log("Message: ", usersMessages);
          
          $usersTweets.append('<p>' + usersMessages + '</p></div>');
          console.log($usersTweets);
          $('.users-container').append($usersTweets);

          index -= 1;
        }
        //console.log(typeof userName);
        console.log("username: " + userClassTag + " username: " + userName);
        
    }); //end of show users tweet function

  }); // end of Refresh Click Button function


}); // end of document.ready() function