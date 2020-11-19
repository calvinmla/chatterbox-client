var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newMessage = {username: App.username, text: $('#message').val()};
    console.log(newMessage);
    console.log(Parse.create(newMessage));
    MessagesView.renderMessage(newMessage);
    // create an object
    // grab username (use App.username), message (use Jquery .val(), and roomname (???)
    // maybe use Parse.create function to 'POST' to server
    // use Jquery .on(something) and the render function to add to the #chats component

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};