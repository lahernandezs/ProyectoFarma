const mongoose= require('mongoose');
const {Schema } = mongoose;

const drugstoreSchema = new Schema({
    drugstoreName:String,
    drugstoreAddress:String
});

mongoose.model('drugstores',drugstoreSchema);
