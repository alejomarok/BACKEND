const express =require('express');

const app = express();
const PORT = 8080;
const server = app.listen(PORT ,() => {
    console.log("express puerto 8080")
});


server.on("Error", error => console.log (`se tiene el siguiente error: ${error}`))

app.get('/',(req, resp) => {
    resp.send({mensaje: 'Hola!'});
})


app.get('/api/productos', (req,resp) => {
  let productos = [
    {nombre: 'clio', precio: 1000000,id: 0 }, 
    {nombre: 'focus', precio: 3000000,id: 1 },
    {nombre: 'jeep', precio: 4000000,id: 2 },
  ];

  if(Object.entries (req.query).lenght > 0) {
    resp.json({
      result: 'get all WITH params',
      productos: productos,
      query: req.query 
    });} 
    else{
      resp.json({
        result: 'get al without params',
      productos: productos
    });
}
})

   

app.get('/api/productos/:id', (req,resp) => {
  let productos = [
    {nombre: 'clio', precio: 1000000,id: 0 }, 
    {nombre: 'focus', precio: 3000000,id: 2 },
    {nombre: 'jeep', precio: 4000000,id: 2 },
  ];

 
      resp.json({
        result: 'get by id',
      producto: producto[0],
      id: req.params.id,
      error:'mi error'
    });
})


app.post('/api/productos', (req,resp) => {
 let nuevoProducto = req.body


 resp.json({
  result: 'Save product',
id: req.params.id,
body: req.body
})
})


app.put('/api/productos/:id', (req,resp) => {
 

 
      resp.json({
        result: 'edit by id',
      id: req.params.id,
      body: req.body
    });
})

app.delete('/api/productos/:id', (req,resp) => {
 

 
  resp.json({
    result: 'delete by id',
  id: req.params.id,
  body: req.body
   });

})