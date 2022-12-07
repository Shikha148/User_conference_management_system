const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const bookingSchema = new Schema({

    userEmail: {type: String,required: true},
    eventId: {type: String,required: true},
    eventTp: {type: String,required: true},
    eventDes: {type: String,required: true}

},

{timestamps: true});

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = Booking;