var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    for (var i = 0; i < Rooms.results.length; i++) {
      RoomsView.renderRoom(Rooms.results[i]);
    }
    //add click even button
    RoomsView.$button.on('click', RoomsView.handleAddButton);
  },

  handleAddButton: function(event) {
    event.preventDefault();
    Rooms.results.push($('#roomname'.val()));
    renderRoom($('#roomname'.val()));
  },

  renderRoom: function(event) {
    RoomsView.$select.append(`<option value = "${event}">${event}</option>`);
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