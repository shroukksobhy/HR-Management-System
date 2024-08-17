const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const users = [
    { username: 'a@a.com', password: '123', role: "manager" },
    { username: 'b@b.com', password: '123', role: 'employee' }

];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({
            message: 'Login successful',
            token: 'fake-jwt-token',
            role: "manager"
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//To run it
//Node server.js
