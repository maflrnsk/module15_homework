const websocket = new WebSocket('wss://echo.websocket.org/'); //wss://echo-ws-service.herokuapp.com не отправляет информацию обратно
const input = document.getElementById('message');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const chat = document.querySelector('.chat');

button1.addEventListener('click', () => {
    const message = input.value;
    if (message) {
        displayMessage(message, 'sent');
        websocket.send(message);
        input.value = '';
    }

    websocket.onmessage = function(event) {
        displayMessage(event.data, 'received');
    }
});

button2.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const {coords} = pos;
            const message = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
            displayMessage(message, 'sentGeo');
        });
    }
});

function displayMessage(message, type) {
    const newMessage = document.createElement('span');

    if (type === 'sent') {
        newMessage.textContent = message;
        newMessage.classList.add('sent');
    } else if (type === 'received') {
        newMessage.textContent = message;
        newMessage.classList.add('received');
    } else if (type === 'sentGeo') {
        const link = document.createElement('a');
        link.href = message;
        link.textContent = 'Моя геолокация';
        link.target = '_blank';
        newMessage.appendChild(link);
        newMessage.classList.add('sent');
    }

    chat.appendChild(newMessage);
    chat.scrollTop = chat.scrollHeight;
}


