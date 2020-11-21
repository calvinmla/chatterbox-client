var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(event) {
    MessagesView.$chats.prepend(MessageView.render(event));
  }

};