const productos = []


const getProductos = (req, res) => {
    res.render('main.pug', { productos })
}

const postProductos = (req, res) => {
    res.render('productos.pug', { productos })
    productos.push(req.body)
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