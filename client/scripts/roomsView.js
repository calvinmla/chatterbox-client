var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    App.fetch();
  },

  renderRoom: function() {
    RoomsView.$('#rooms button').append(RoomsView.render(obj));
  }

};
