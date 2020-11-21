var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // create an object
    // grab username (use App.username), message (use Jquery .val(), and roomname (???)
    var newMessage = {username: App.username, text: $('#message').val(), roomname: RoomsView.$select.val() || 'Lobby'};
    // maybe use Parse.create function to 'POST' to server
    Parse.create(newMessage);
    // use Jquery .on(something) and the render function to add to the #chats component
    MessagesView.renderMessage(newMessage);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};