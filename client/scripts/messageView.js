var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- obj.username %></div>
        <div><%- obj.text %></div>
        </div>
        `)
};

// <div class="roomname"><%- obj.roomname %></div>

// MessageView.render(message)

// {
//   message: '',
//   username: '',
// }