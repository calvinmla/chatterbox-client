var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $refresh: $('#refresh'),


  initialize: function() {
    var uniqueRooms = _.uniq(Rooms.results);
    for (var i = 0; i < uniqueRooms.length; i++) {
      RoomsView.renderRoom(uniqueRooms[i]);
    }
    //add click even button
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleSelect);
  },

  handleSelect: function() {
    // when a room is selected, remove all the other rooms from the #chats area
    event.preventDefault();
    var selectedOption = $('#rooms option:selected').val();
    $('.chat').remove();
    for (var i = 0; i < Messages.results.length; i++) {
      if (Messages.results[i].roomname === selectedOption) {
        MessagesView.renderMessage(Messages.results[i]);
      }
    }
  },

  handleAddRoom: function(event) {
    event.preventDefault();
    var newRoom = $('#roomname').val();
    console.log(newRoom);
    if (Rooms.results.indexOf(newRoom === -1)) {
      Rooms.results.push(newRoom);
      RoomsView.renderRoom(newRoom);
      // need to fix this as it continues to add blank spaces into <select>
    }
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option value="${_.escape(room)}">${_.escape(room)}</option>`);
  }

};
// object //
// function(data.result, targetroomname){
// for (var i =0; i< data.result.length; i++){
// if(data.result[i].roomname !== target.roomname){ // chat
// [].push(data.result[i].username)
// [] ($chat).slice
//}
//}
//}