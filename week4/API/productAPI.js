import exp from 'express';
export const productApp=exp.Router();

//product API
let products = [];
//1 get request
productApp.get('/products', (req,res) => {
    // send res to client 
    res.status(200).json({ message: "all products", payload: products })
}) 

productApp.post('/products',(req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ message: "product created" })
})
//2.read user by id
productApp.get('/products-id/:id', (req, res) => {

    console.log(req.params)
    let productId = Number(req.params.id)
    let product = products.find((ele) => ele.id === productId)
    if (product==-1) {
        return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "products get by id", payload: product})
})

// get the products by brand
productApp.get('/products-brand/:brand', (req, res) => {

    let modifiedProduct = req.params.brand;
    let productBrand = products.find((ele) => ele.brand === modifiedProduct);
    if (productBrand.length===0) {
        return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "products", payload: productBrand });
})

productApp.put('/products/:id', (req, res) => {

    //get modified user from req
    let modifiedProduct = req.body;
    //find user with id exists in array
    let productid = products.findIndex((ele) => ele.id === modifiedProduct.id);
    // user not found,send res as "user not found"
    if (productid===-1) {
        return res.status(404).json({ message: "product not found" });
    }
    // if found then modify the user
    let deletedProduct = products.splice(productid, 1, modifiedProduct);
    res.status(200).json({ message: "product modified" });
});



//delete req handling 
productApp.delete('/products/:id', (req, res) => {

    let productId = Number(req.params.id);
    let productIndex = products.findIndex((ele) => ele.id === productId)
    if (!productIndex) {
        return res.status(404).json({ message: "product not found" });
    }

    let deletdProduct = products.splice(productIndex, 1);
    res.status(200).json({ message: "deleted product" })
})
