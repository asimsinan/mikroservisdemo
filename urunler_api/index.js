const app = require('express')();

app.get('/urunler', (req, res) => res.send('Merhaba Ürünler API!'));

app.listen(3000, () => console.log(`Ürünler API 3000 portunda dinlemede!`));