const asyncHandler = require('express-async-handler')

// Get Products
// GET /api/products
// Public
const getProducts = asyncHandler(async(req, res) => {
    res.status(200).json({Message: 'Get Products'})
})

// Set Product
// POST /api/products
// Public
const setProduct = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({Message: 'Set Product'})
})

// Update Product
// PUT /api/products/:id
// Public
const updateProduct = asyncHandler(async(req, res) => {
    res.status(200).json({Message: `Update Product ${req.params.id}`})
})

// Delete Product
// DELETE /api/products/:id
// Public
const deleteProduct = asyncHandler(async(req, res) => {
    res.status(200).json({Message: `Delete Product ${req.params.id}`})
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}