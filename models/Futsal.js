import mongoose from 'mongoose';
const { Schema } = mongoose;

const FutsalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    slots: {
        type: [String],
    },
    cheapestprice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        defult: false,
    },
})

export default mongoose.model("Futsal", FutsalSchema)