const productService = require('../service/product.js');

async function getAllProduct(req, res) {
    try{
        const rows = await productService.getAllProduct();

        res.status(200).json(rows);
    }catch(error){  
        res.status(500).send ({
            messafe: "Error getting products",
            body: error.message
        })

    }
}

async function createProduct(req, res){
    console.log(res.body)
    const { descricao, quantidadeEstoque, unidadeMedia, valorUnidade } = req.body;

    try{
        await productService.createProduct( descricao, quantidadeEstoque, unidadeMedia, valorUnidade);

        res.status(201).json({ message: "Sucess"})
    }catch(error){
        res.status(500).send({
            message: 'Error adding product!',
            error: error.message,
        })
    }
}

async function updateProduct(req, res) {
    try { 
        const { id } = req.params;
        console.log(req)
        
        const { descricao, quantidadeEstoque, unidadeMedia, valorUnidade } = req.body;

        await productService.updateProduct(id, descricao, quantidadeEstoque, unidadeMedia, valorUnidade)

        res.status(200).send("Sucess");
    }catch(error){
        res.status(500).send({
            message: ("Error updating product!"),
            body: error.message,
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        await productService.deleteProduct(id)

        res.status(200).send({message: "Deleted Product!"});
    }catch (error){
        res.status(500).send({
        message: "Error deleting product!!",
        error: error.message,
    })
}
}

async function getProductById(req, res) {
    try {
        const { id } = req.params;
        
        const product = await productService.getProductById(id)

        res.status(200).json(product);
        }catch (error) {
        res.status(500).send({
            message: "Error getting product by ID.",
            error: error.message,
        });
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
}