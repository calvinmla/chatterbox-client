var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);


    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      var test = data; // test is equal to the server object holding the data
      console.log(test);
      for (var i = 0; i < test.results.length; i++) { // test.results = the array holding the data // change to data
        var serverObj = test.results[i];
        Messages = test;
        MessagesView.renderMessage(serverObj);

        if ((serverObj.roomname !== undefined) && (Rooms.results.indexOf(serverObj.roomname) === -1)) {
          Rooms.results.push(serverObj.roomname);

        }
      }
      // examine the response from the server request:

      console.log(Rooms.results);
      console.log(Messages);

      callback();
    });
  },


  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
