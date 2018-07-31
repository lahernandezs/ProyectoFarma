const mongoose = require('mongoose');
const Laboratory = mongoose.model('laboratories');

exports.createLaboratory = async (laboratory) => {
    console.log(laboratory);
    const existe = await Laboratory.findOne({
        laboratoryName: laboratory.productName
    });
    console.log(existe);

    if (!existe) {
        var newLaboratory = new Laboratory({
            laboratoryName: laboratory.laboratoryName,
            laboratoryAddress: laboratory.laboratoryAddress
        }).save();
        return newLaboratory;
    } else {
        return (laboratory);
    }
}

exports.searchLaboratories = async () => {
    var laboratories = await Laboratory.find({})
    return (laboratories);
}

exports.deleteLaboratory = async (laboratory) => {
    const exists = await Laboratory.findOne({
        laboratoryName: laboratory.laboratoryName
    });

    if (exists) {
        Laboratory.findByIdAndRemove(exists._id);
    }
}