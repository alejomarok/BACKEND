const { Router } = require('express')
const router = Router()
const { getProductos, postProductos ,volverInicio } = require('../controllers/productosController')

router.get('/', getProductos)
router.post('/productos', postProductos)
router.get('/volver', volverInicio)
module.exports = router