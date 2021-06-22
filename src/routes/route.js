const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../public/assets/index');

})

router.get('/imc', (req, res) => {
    res.render('../public/assets/calculadora-imc');

});

router.get('/time', (req, res) => {
    res.render('../public/assets/relogio');

});

module.exports = router;




