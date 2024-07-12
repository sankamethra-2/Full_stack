const express =  require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling Get request to products'
    });
});

router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling POST request to products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'Special Id',
            id: id
        });
    } else {
        res.status(200).json({
            message: `Passed a ID ${id}`,
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Updated product ${id}`
    });
});



module.exports = router;