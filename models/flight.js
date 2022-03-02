import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  flightNo: Number,
  departs: {
    type: Date,
    default: function() {
      return new Date.now() + 365*24*60*60*1000
    }
  },
  tickets: {
    type: [ticketSchema]
  }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}