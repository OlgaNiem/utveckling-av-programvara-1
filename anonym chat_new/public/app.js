const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');
let messages = [];


function renderMessages(messages) {
  messagesDiv.innerHTML = '';
  if (Array.isArray(messages)) {
    messages.forEach(message => {
      const div = document.createElement('div');
      const senderClass = message.id === localStorage.getItem('senderId') ? 'sender' : 'other';
      div.classList.add('message', senderClass);
      div.innerHTML = `
        <span class="timestamp">${new Date(message.timestamp).toLocaleString()}</span>
        <span class="text">${message.text}</span>
      `;
      messagesDiv.appendChild(div);
    });
  }
}

function sendMessage(text) {
  fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text})
  })
  .then(response => response.json())
  .then(message => {
    localStorage.setItem('senderId', message.id);
    messages.push(message);
    renderMessages(messages);
  })
  .catch(err => console.error(err));
}

messageForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (text) {
    sendMessage(text);
    messageInput.value = '';
  }
});

setInterval(() => {
  fetch('/api/messages')
  .then(response => response.json())
  .then(renderMessages)
  .catch(error => console.error(error));
}, 3000);
