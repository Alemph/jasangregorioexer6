import mongoose from 'mongoose';

// Connection string
await mongoose.connect("mongodb+srv://jlsangregorio:xvpJ6EPxw32IOjgd@cluster0.na6nkrh.mongodb.net/StudentDatabase");

console.log("Connected to MongoDB")
// Subject model
const Student = mongoose.model('students', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
});

// Function to save a new student
const saveStudent = async (req, res) => {
    if (req.body.stdnum && req.body.fname && req.body.lname && req.body.age) {
        const newStudent = new Student(req.body);

        await newStudent.save();

        return res.status(200).json({ inserted: true });
    } else {
        return res.status(400).json({ error: "INVALID" });
    }
};

// Function to update the last name of a student
const updateStudent = async (req, res) => {
    try {
        const fname = req.body.fname;

        if (!fname) {
            return res.status(400).json({ error: "INVALID" });
        }

        const updatedStudent = await Student.updateOne({ fname: fname }, { $set: { lname: "Parker" } });

        if (updatedStudent.nModified > 0) {
            return res.status(200).json({ updated: true });
        } else {
            return res.status(404).json({ updated: false });
        }
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).send("SERVER ERROR");
    }
};

// Function to delete a student
const deleteStudent = async (req, res) => {
    try {
        const stdnum = req.body.stdnum;

        if (!stdnum) {
            return res.status(400).json({ error: "INVALID" });
        }

        await Student.deleteOne({ stdnum: stdnum });

        return res.status(200).json({ deleted: true });
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).send("SERVER ERROR");
    }
};

// Function to delete all students
const deleteAllStudents = async (req, res) => {
    try {
        const deleteAllStudents = await Student.deleteMany({});

        return res.status(200).json({ deleted: true, deleteCount: deleteAllStudents.deletedCount });
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).send("SERVER ERROR");
    }
};

// Function to get a student by student number
const getStudent = async (req, res) => {
    try {
        const stdnum = req.query.stdnum;

        if (!stdnum) {
            return res.status(400).json({ error: "INVALID" });
        }

        const getStudent = await Student.find({ stdnum: stdnum });

        return res.status(200).json(getStudent || []);
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).send("SERVER ERROR");
    }
};

// Function to get all students
const getAllStudents = async (req, res) => {
    try {
        const getStudents = await Student.find({});

        return res.status(200).json(getStudents || []);
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).send("SERVER ERROR");
    }
};

export { saveStudent, updateStudent, deleteStudent, deleteAllStudents, getStudent, getAllStudents };
