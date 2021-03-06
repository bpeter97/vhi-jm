const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Call model.
const CallSchema = new Schema({
    date: {
        type: Date,
    },
    follow_up: {
        type: Date,
    },
    client_name: {
        type: String
    },
    phone_number: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    year_built: {
        type: String
    },
    square_foot: {
        type: Number,
    },
    home_inspection: {
        type: Boolean
    },
    crawl: {
        type: Boolean
    },
    multi_story: {
        type: Boolean
    },
    pool_spa: {
        type: Boolean
    },
    deck: {
        type: Boolean
    },
    discount: {
        type: Decimal128
    },
    quote: {
        type: Decimal128
    },
    inspection: {
        type: Schema.Types.ObjectId,
        ref: "Inspection"
    },
    total: {
        type: Decimal128
    }
});

// Export the Call model.
module.exports = Call = mongoose.model("call",CallSchema);
