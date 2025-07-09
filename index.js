<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>ChatGPT PalRyz</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <button id="menuBtn">☰</button>
    <span id="logo">ChatGPT PalRyz</span>
    <button id="plusBtn">Dapatkan Plus ✚</button>
  </header>

  <main>
    <h1>Apa yang bisa saya bantu?</h1>
    <div class="quick-actions">
      <button class="chip">🖼️ Buat gambar</button>
      <button class="chip">🌞 Buatkan rencana</button>
      <button class="chip">📊 Analisis data</button>
      <button class="chip">➕ Lainnya</button>
    </div>
    <div id="chat" class="chat-box"></div>
  </main>

  <footer>
    <input id="input" placeholder="Tanyakan apa saja" />
    <div class="actions">
      <button id="send">➤</button>
      <button onclick="speak()" title="Mic 🎤">🎤</button>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
