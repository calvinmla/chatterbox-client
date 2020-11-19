var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);


    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var test = data; // test is equal to the server object holding the data
      for (var i = 0; i < 5; i++) { // test.results = the array holding the data
        var serverObj = test.results[i];
        MessagesView.renderMessage(serverObj);
        // RoomsView.renderMessage(serverObj);
        // return arr[Math.random() * (100 - 0) + 0 ];
      }
      console.log(test);

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
