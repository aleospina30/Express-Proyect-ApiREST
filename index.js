const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=> {
  res.send('Mi server en express')
});


app.get('/nueva-ruta',(req,res)=> {
  res.send('Nueva ruta ')
});


app.get('/products',(req,res)=> {
  res.json({
    name: 'Producto 1',
    price: 1000,
    category: "Shoes"
  })
});



app.listen(port,() =>{
  console.log('Mi port ' + port);
});
