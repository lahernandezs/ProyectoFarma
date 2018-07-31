const mongoose = require('mongoose');
const Drugstore = mongoose.model('drugstores');

exports.createDrugstore = async (drugstore) => {
    console.log(drugstore);
    const existe = await Drugstore.findOne({
        drugstoreName: drugstore.productName
    });
    console.log(existe);

    if (!existe) {
        var newDrugstore = new Drugstore({
            drugstoreName: drugstore.drugstoreName,
            drugstoreAddress: drugstore.drugstoreAddress
        }).save();
        return newDrugstore;
    } else {
        return (drugstore);
    }
}

exports.searchDrugstores = async () => {
    var drugstores = await Drugstore.find({})
    return (drugstores);
}

exports.deleteDrugstore = async (drugstore) => {
    const exists = await Drugstore.findOne({
        drugstoreName: drugstore.drugstoreName
    });

    if (exists) {
        Drugstore.findByIdAndRemove(exists._id);
    }
}