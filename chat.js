function sendMessage(chatRoom) {
    var inputElement = document.querySelector('.chat-input input');
    var message = inputElement.value.trim();

    if (message !== '') {
        var messagesContainer = document.querySelector(`.${chatRoom} .chat-messages`);

        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;

        messagesContainer.appendChild(messageElement);

        // Clear the input field after sending the message
        inputElement.value = '';

        // Scroll to the bottom to show the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
