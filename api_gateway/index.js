const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
const port = 3000;

const {
  SIPARISLER_API_URL,
  URUNLER_API_URL,
} = require('./URLs');

const urunlerAyarlar = {
  target: URUNLER_API_URL,
  changeOrigin: true, 
  secure: true,
  logger: console
};

const siparislerAyarlar = {
  target: SIPARISLER_API_URL,
  changeOrigin: true, 
  secure: true,
  logger: console
};

const urunlerProxy = createProxyMiddleware(urunlerAyarlar);
const siparislerProxy = createProxyMiddleware(siparislerAyarlar);

app.get('/', (req, res) => res.send('Merhaba API Gateway'));
app.get('/siparisler', siparislerProxy);
app.get('/urunler', urunlerProxy);

app.listen(port, () => console.log(`Uygulama ${port} nolu portta dinlemede!`));