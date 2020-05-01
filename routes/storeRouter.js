const router = require('express').Router()
const storeController = require('../controllers/seller/index')
const authenticateMiddleware = require('../middleware/authenticateMiddleware')

// @route POST api/store
// @desc Register new store
// @access Private
router.post('/', authenticateMiddleware, storeController.createStore)



// @route GET api/store/
// @desc Get store by seller_id from auth token
// @access Private
router.get('/', authenticateMiddleware, storeController.getStore)

// @route GET /api/store/:store_id
// @desc Get store by store_id from URL
// @access Public
router.get('/:store_id', storeController.getStore)


module.exports = router
