
import express from 'express';
const app = express();
 
// Definieren der ersten Route
app.get('/', (req, res) => {
  res.send('Willkommen bei Ihrem ersten Express-Server!');
});
 
// Weitere Route
app.get('/about', (req, res) => {
  res.send('Dies ist die About-Seite.');
});

app.get('/contact', (req, res) => {
    res.send('Dies ist die Contact-Seite.');
  });
 
  
// Server starten
app.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});