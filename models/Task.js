const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    pickup_loc: {
        type: String,
        required: true
    },
    dropoff_loc: {
        type: String,
        required: true
    },
    drop_off_number: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        default: 0.00
    },
    distance: {
        type: Number,
        default: 0.00
    },
    price: {
        type: Number,
        default: 0.00
    },
    status: {
        type: String,
        default: 'unfinished'
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    date_completed: {
        type: Date,
        default: null
    },
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    driver_id: {
        type: String,
        default: 'null'
    },
    imageUrl: {
    type: String,
} 
}, {
    timestamps: true
})

module.exports = Task = mongoose.model('Task', TaskSchema);