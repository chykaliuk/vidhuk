const express = require('express');
const cors = require('cors');

const app = express();

// Підключення CORS
app.use(cors());

// Інші налаштування сервера
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CORS працює!');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
