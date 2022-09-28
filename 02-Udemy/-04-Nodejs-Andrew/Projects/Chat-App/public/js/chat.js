const socket = io();

// Elements
const fromEl = document.querySelector("#message-form");
const sendLocationBtn = document.querySelector("#send-location");
const sendMessageBtn = document.querySelector("#send-message");
const inputMessage = document.querySelector("#message-input");
const messages = document.querySelector("#messages");

//template
const messageTemplate = document.querySelector("#message-template").innerHTML;
const positionLinkTemplate = document.querySelector("#location-message-template").innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;

//Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

document.querySelector('.scroll').addEventListener('click', () => {
  messages.scrollTop = messages.scrollHeight
})

const autoscroll = () => {
  // New message element
  const $newMessage = messages.lastElementChild

  // Height of the new message
  const newMessageStyles = getComputedStyle($newMessage)
  const newMessageMargin = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

  // Visible height
  const visibleHeight = messages.offsetHeight

  // Height of messages container
  const containerHeight = messages.scrollHeight

  // How far have I scrolled?
  const scrollOffset = messages.scrollTop + visibleHeight

  if (containerHeight - newMessageHeight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight
  }
}
///////////( receive(on))/////////////
socket.on("message", (message) => {
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoscroll()
});
//
socket.on("locationMessage", (message) => {
  const html = Mustache.render(positionLinkTemplate, {
    username: message.username,
    location_url: message.url,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoScroll()
});

socket.on('roomData', ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users
  })
  document.querySelector('#sidebar').innerHTML = html
})

// ///////////( onClick => send(emit))/////////////
fromEl.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessageBtn.setAttribute("disabled", "true");
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    // validate
    sendMessageBtn.removeAttribute("disabled");
    inputMessage.value = "";
    inputMessage.focus();
    if (error) {
      return console.log(error);
    }
    console.log("The message was delivered!");
  });

});

////////////////////////////////////////////////////
sendLocationBtn.addEventListener("click", () => {
  sendLocationBtn.setAttribute("disabled", "true");
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        createdAt: position.timestamp,
      },
      () => {
        sendLocationBtn.removeAttribute("disabled");
      }
    );
  });

});

socket.emit("join", { username, room }, (error) => {
  // Show Error
  if (error) {
    alert(error);
    location.href = "/";
  }
});

////////////////////////////////////////////////////
