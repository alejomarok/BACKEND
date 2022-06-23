const { Router } = require('express')
const router = Router()
const champs = [{ name: 'alejo', lastName: 'marco' },{ name: 'elias', lastName: 'rivarola' },{ name: 'maxi', lastName: 'bergamin' }, ]

router.get('/', (req, res) => {
    res.render('champs', { champs, hasAny: true} )
})



module.exports = router