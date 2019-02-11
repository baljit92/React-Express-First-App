const mongoose = require('mongoose');
const router = require('express').Router();
const Users = mongoose.model('Users');
const Leaves = mongoose.model('Leaves');
const auth = require('../auth');


var moment = require('moment');


router.post('/save', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

	leave_start_range = moment(req.body.l_start_range);
	leave_end_range = moment(req.body.l_end_range);

	      // If you want an inclusive end date (fully-closed interval)
	for (var m = moment(leave_start_range); m.diff(leave_end_range, 'days') <= 0; m.add(1, 'days')) {
	  console.log(m.format('YYYY-MM-DD'));
		
		leave = {};
		leave.type = req.body.l_type;
		leave.description = req.body.desc;
		leave.date = m.format('YYYY-MM-DD');
		// leave.status = req.body.l_stat;
		// leave.approved_by = req.body.approved;
		leave.userid = id;

		const finalLeave = new Leaves(leave);
		finalLeave.save((error, blah) => {
        	if (error) {
          		return res.json({ message: error });
        	}
    	});
	}
	

		return res.json({ message: "save successful" });
	});
});

module.exports = router;