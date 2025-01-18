const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let reviews = []; // Зберігання відгуків у пам'яті

// Отримання всіх відгуків
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Додавання нового відгуку
app.post('/reviews', (req, res) => {
    const { name, text } = req.body;
    if (name && text) {
        reviews.push({ name, text });
        res.status(201).json({ message: 'Review added successfully' });
    } else {
        res.status(400).json({ message: 'Name and text are required' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});