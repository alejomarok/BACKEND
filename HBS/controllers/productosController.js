const Contenedor = require('../Contenedor')
const contenedor = new Contenedor()
const productos = []

const getProductos = (req, res) => {
    const productos= contenedor.getAll()
    res.render('productos.hbs',{productos})
}

const postProductos = (req, res) => {
    res.render('productos.hbs', { productos })
    productos.push(req.body)
    const {title, price, thumbnail} = req.body 
    contenedor.newProduct(title, price, thumbnail)
    res.redirect('/productos')
}

const volverInicio =(req,res)=>{
    res.redirect('/')
}



module.exports = {
    getProductos,
    postProductos,
    volverInicio,
}