const mongoose = require('mongoose');
const Product = mongoose.model('products');

exports.createProduct = async (product) => {
    console.log(product);
    const existe = await Product.findOne({
        productName: product.productName
    });
    console.log(existe);

    if (!existe) {
        var newProduct = new Product({
            productName: product.productName,
            productPrice: product.productPrice
        }).save();
        return newProduct;
    } else {
        return (product);
    }
}

exports.searchProducts = async () => {
    var productos = await Product.find({})
    return (productos);
}

exports.deleteProduct = async (product) => {
    const existe = await Product.findOne({
        productName: product.productName
    });

    if (existe) {
        Product.findByIdAndRemove(existe._id);
    }
}