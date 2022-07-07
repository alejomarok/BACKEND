const { Router } = require('express');
const router = Router()
const { getProductos,getProductoId,postProducto,putProducto,deleteProducto, } = require('../controllers/productosControllers')



router.get('/api/productos', getProductos)
router.get('/api/productos/:id', getProductoId)



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