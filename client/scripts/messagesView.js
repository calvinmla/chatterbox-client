var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch();
  },

  renderMessage: function(obj) {
    MessagesView.$chats.append(MessageView.render(obj));
  }

};