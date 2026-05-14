import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data.json');

const readData = () => {
    try {
        const raw = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(raw);
    } catch (e) {
        return { newsletter: [], guestbook: [] };
    }
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
};

app.post('/api/newsletter', (req, res) => {
    const { email, source } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    const data = readData();
    data.newsletter.push({ email, source, date: new Date().toISOString() });
    writeData(data);
    res.json({ success: true });
});

app.post('/api/guestbook', (req, res) => {
    const { name, location, email, message } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

    const data = readData();
    data.guestbook.push({ name, location, email, message, date: new Date().toISOString() });
    writeData(data);
    res.json({ success: true });
});

app.listen(3001, () => {
    console.log('CIRE Backend running on port 3001');
});
