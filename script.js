const chatbox = document.querySelector('.chatbox');
const input = document.querySelector('.input');

function appendMessage(message, className) {
	const messageElem = document.createElement('div');
	messageElem.classList.add('message');
	messageElem.classList.add(className);
	messageElem.innerText = message;
	chatbox.appendChild(messageElem);
	chatbox.scrollTop = chatbox.scrollHeight;
}

async function getResponse(inputText) {
	const response = await fetch(`https://api.openai.com/v1/engines/davinci-codex/completions?prompt=${encodeURIComponent(inputText)}&max_tokens=50`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': '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'
		}
	});
	const data = await response.json();
	return data.choices[0].text.trim();
}

input.addEventListener('keydown', async (event) => {
	if (event.key === 'Enter') {
		const inputText = input.value.trim();
		if (inputText !== '') {
			appendMessage(`You: ${inputText}`, 'user');
			input.value = '';
			const responseText = await getResponse(inputText);
			appendMessage(`ChatGPT: ${responseText}`, 'chatgpt');
		}
	}
});
