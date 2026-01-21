const express = require("express");

const router = express.Router();

const {
    getStudents,
    getStudent,
    addStudent,
    editStudent,
    editStudentStatus,
    removeStudent
} = require("../controllers/student.controller.js");

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', editStudent);
router.patch('/:id/status', editStudentStatus);
router.delete('/:id', removeStudent);

module.exports = router;