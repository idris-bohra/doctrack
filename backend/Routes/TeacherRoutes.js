const express = require('express');
const { addform, loginforteachers } = require('../RequestFunction/TeacherFunction');
const router = express.Router();

// router.post('/registerteacher', signupforteachers);
router.post('/loginteacher', loginforteachers);

module.exports = router;