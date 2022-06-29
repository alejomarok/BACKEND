const productos = []


const getProductos = (req, res) => {
    res.render('main.ejs', { productos })
}

const postProductos = (req, res) => {
    res.render('productos.ejs', { productos })
    productos.push(req.body)
    res.redirect('/productos')

    
}




module.exports = {
    getProductos,
    postProductos,
}