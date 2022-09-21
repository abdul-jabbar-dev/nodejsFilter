const { default: mongoose } = require("mongoose")
const { tourCollection } = require("../Schemas/Tour.schema")

module.exports.getTours = async (req, res) => {
    try {
        const query = req.query
        const fields = query.fields?.split(',')?.join(" ")
        const sort = query.sort?.split(',')?.join(" ")
        let limit = (query.limit) * 1 || 5
        const result = await tourCollection.find({}, fields).sort(sort).skip((((query.page) * 1 || 1) - 1) * limit).limit(limit)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            status: "internal sever failed",
            massage: error.message
        })
    }
}

module.exports.getATour = async (req, res) => {
    try {
        let find = await tourCollection.findOneAndUpdate({ _id: req.params.id }, { $inc: { views: 1 } })
        res.status(200).send(find)
    } catch (error) {
        res.status(400).send({
            status: "internal sever failed",
            massage: error.message
        })
    }
}

module.exports.getTrendingTour = async (req, res) => {
    try {
        let find = await tourCollection.find({ views: { $exists: true } }).sort({ views: -1 }).limit(req.query.limit || 3)
        res.status(200).send(find)

    } catch (error) {
        res.status(400).send({
            status: "internal server error",
            massage: error.message
        })
    }
}

module.exports.getCheapestTour = async (req, res) => {
    try {
        let find = await tourCollection.find({}).sort({ price: 1 }).limit(3)
        res.status(200).send(find)
    } catch (error) {
        res.status(400).send({
            status: "Internal server error",
            massage: error.message
        })
    }
}

module.exports.updateATour = async (req, res) => {
    try {
        let result = await tourCollection.updateOne({ _id: req.params.id }, { $set: req.body }, {
            runValidators: true
        })
        res.status(200).send({ status: "Update success", result })
    } catch (error) {
        res.status(400).send({
            status: "Update failed",
            massage: error.message
        })
    }
}

module.exports.postTours = async (req, res) => {

    try {
        console.log(req.body)
        const result = await tourCollection.create(req.body)
        res.status(200).send({
            status: "insertion complete",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "insertion error",
            massage: error.message
        })
    }
}