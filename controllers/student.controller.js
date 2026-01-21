const Student = require("../models/student.model.js");

const getStudents = async (req, res) => {
    try {
        const students = await Student.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudent = async (req, res) => {
    try {
        const student = await Student.getStudentById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addStudent = async (req, res) => {
    try {
        const result = await Student.createStudent(req.body);
        res.status(201).json({
            id: result.insertId,
            ...req.body,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editStudent = async (req, res) => {
    try {
        await Student.updateStudent(req.params.id, req.body);
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editStudentStatus = async (req, res) => {
    try {
        const {status} = req.body;
        await Student.updateStudentStatus(req.params.id, status);
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const removeStudent = async (req, res) => {
    try {
        await Student.deleteStudent(req.params.id);
        res.json({ message: "Student record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    editStudent,
    editStudentStatus,
    removeStudent
};