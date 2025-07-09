const input = document.getElementById('input');
const send = document.getElementById('send');
const chat = document.getElementById('chat');

function addMessage(text, type) {
  const el = document.createElement('div');
  el.className = `msg ${type}`;
  el.textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
  if (type === 'bot') speakText(text);
}

async function handleSend() {
  const msg = input.value.trim();
  if (!msg) return;
  addMessage(msg, 'user');
  input.value = '';
  input.disabled = true;
  send.disabled = true;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: msg,
        model: 'gpt-3.5-turbo'
      })
    });
    const data = await res.json();
    addMessage(data.reply, 'bot');
  } catch (err) {
    addMessage('❌ Gagal: ' + err.message, 'bot');
  } finally {
    input.disabled = false;
    send.disabled = false;
    input.focus();
  }
}

send.addEventListener('click', handleSend);
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleSend();
});

function speakText(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'id-ID';
  window.speechSynthesis.speak(utter);
}
