const mongoose= require('mongoose');
const {Schema } = mongoose;

const laboratorySchema = new Schema({
    laboratoryName:String,
    laboratoryAddress:String
});

mongoose.model('laboratories',laboratorySchema);
