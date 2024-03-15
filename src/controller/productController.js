const productService = require('../service/product.js');

async function getALLProduct(req, res) {
    try{
        const rows = await productService.getALLProduct();

        res.status(200).json(rows);
    }catch(error){  
        res.status(500).send ({
            messafe: "Error getting users",
            body: error.message
        })

    }
}

module.exports = {
    getALLProduct,
}