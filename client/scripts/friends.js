var Friends = {

  friendList: [],

  initialize: function() {
    $('#chats').on('click', '.username', Friends.toggleStatus);
  },

  // handleClick: function() {
  //   var friendUsername = $('.username').val();
  //   friendList.push(friendUsername);
  //   console.log(friendList);
  //   console.log('clicked');
  //   Friends.toggleStatus();
  // },

  toggleStatus: function() {
    var username = _.escape($(this).text());
    console.log(_.escape($(this).text()));
    console.log(this);
    $(`div:contains(${username})`).addClass('friend');




  // friendList.push(Message.result.username)
  // var friendUsername = $('.username').val();
  // for ( var i = 0; i < Messages.results.length; i++) {
  //   if ($(this).text() === Messages.results[i].username) {
  //     $('.username').addClass('friend');
  // $('.friend').css('background-color', 'red');
  // $('.text').css('background-color', 'red')
  // $('.roomname').css('background-color', 'red')
  //     }
  //   }
  }
};




// on click of a username, we should add that username to our friendList array

// iterate through the friends list, and apply CSS ".css()" to those usernames

