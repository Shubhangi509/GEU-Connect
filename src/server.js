const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
});

app.get('/convert/pdf-to-txt', async (req, res) => {
    const { file } = req.body;

    try {
        const response = await axios.post('https://v2.convertapi.com/convert/pdf/to/txt?Secret=KWt1WcM9cnFxcgtf', file, {
            headers: {
                'Content-Type': 'application/pdf',
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error converting PDF to text:', error.message);
        res.status(500).json({ error: 'Error converting PDF to text' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
