const express = require('express')
const app = express()
const rutas = require('./routes/index')

const fs = require('fs');
// defino el motor de plantilla
app.engine('cte', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content.toString()
                            .replace('^^titulo$$', ''+ options.titulo +'')
                            .replace('^^mensaje$$', ''+ options.mensaje +'')
                            .replace('^^autor$$', ''+ options.autor +'')
                            .replace(' ^^version$$', ''+ options.version +'');
    return callback(null, rendered);
  });
});
 

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'cte'); // registra el motor de plantillas


app.use('/', rutas)

app.listen(8080, () => {
  console.log('escuchando el puerto 8080')
})