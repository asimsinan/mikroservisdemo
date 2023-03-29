const app = require('express')();

app.get('/siparisler', (req, res) => res.send('Merhaba Siparişler API!'));

app.listen(3000, () => console.log(`Siparişler API 3000 portunda dinlemede!`));