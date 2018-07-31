const mongoose= require('mongoose');
const {Schema } = mongoose;

const productSchema = new Schema({
    productName:String,
    productPrice:{type:Number,default:0.0}
});

mongoose.model('products',productSchema);
