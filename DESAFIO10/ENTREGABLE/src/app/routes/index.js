const { Router } = require('express');
const router = Router()
const { getProductos,getProductoId,postProducto,putProducto,deleteProducto, } = require('../controllers/productosControllers')
const { postCarrito, deleteCarrito, verCarrito, 
    insertProductoByIdToCart, deleteProductoCarrito} = require('../controllers/carritoControllers')



router.get('/api/productos', getProductos)
router.get('/api/productos/:id', getProductoId)

router.post('/carrito', postCarrito) 
router.delete('/carrito/:id', deleteCarrito )
router.get('/carrito/:id/productos', verCarrito)
router.post('/carrito/:id/productos', insertProductoByIdToCart)
router.delete('/carrito/:id/productos/:id_prod', deleteProductoCarrito)

//modo admin
const auth = (req, res, next)=>{
    const admin = true
    if(admin) {return next()} 
    else {
        let mensajeError={
            error : "-1",
            descripcion: `ruta: ${req.url} método: ${req.method} no autorizado`
        }
        res.status(401).json( mensajeError)
    }
}

router.post('/api/productos',auth, postProducto)
router.put('/api/productos/:id',auth, putProducto)
router.delete('/api/productos/:id',auth, deleteProducto)



module.exports = router