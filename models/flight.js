import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
  }, {
    timestamps: true
})

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
  flightNo: {
    type: Number,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date.now() + 365*24*60*60*1000
    }
  },
  tickets: [ticketSchema]
  
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)



export {
  Flight
}