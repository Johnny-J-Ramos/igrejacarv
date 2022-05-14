const express = require('express');
const app = express();

app.get('/', (req, res) => {
   return res.json({
      name: "Johnny"
   })
})

app.listen(3333, () =>
  console.log('Servidor conectador!')
);