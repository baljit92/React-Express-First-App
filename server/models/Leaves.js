const mongoose = require('mongoose');

const { Schema } = mongoose;

const LeaveSchema = new Schema({
	
	userid: {type: Schema.Types.ObjectId, ref: 'Users'},
    type: { type : Number, default: 1 },
    description: { type : String, default: "" },
    date: { type : Date, default: Date.now },
    status: {type: String, default: ""},
    approved_by:  {type: String, default: ""},
    cancelled: {type:Boolean, default:false}
});

mongoose.model('Leaves', LeaveSchema);