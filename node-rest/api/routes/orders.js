const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was fetched '
    });
})

router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'Orders was posted'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Order Id is ${id}`,
    });
});

module.exports = router;