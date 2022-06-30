const { Router } = require('express')
const router = Router()

router.get('/cte1', (req, res) => {
    res.render('plantilla1', { titulo : 'titulaso', mensaje: 'hola mundo', autor: 'alejo marco', version:'2022'} )
})



module.exports = router