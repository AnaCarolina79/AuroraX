const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

res.send('oi to funcionando')
});

app.listen(3000, () => console.log("to aqui funcionano"));