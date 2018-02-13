import mongoose from 'mongoose';
import uuid from 'uuid/v1';

var Schema = mongoose.Schema;

var note = new Schema({
  _id: {
    type: String,
    default: () => { return uuid(); }
  },
  text: {
    type: String,
    required: true
  },
  // event_id: {
  //   type: String,
  //   ref: 'Event',
  //   required: true
  // },
  created: {
    type: Date,
    default: Date.now
  }
}, { toJSON: { virtuals: true } });

// note.virtual('event', {
//   ref: 'Event',
//   localField: 'event_id',
//   foreignField: '_id',
//   justOne: true
// });

mongoose.model('Note', note);
