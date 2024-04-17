import mongoose from 'mongoose';

// Connect to MongoDB using a given URI.
async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://jlsangregorio:xvpJ6EPxw32IOjgd@cluster0.na6nkrh.mongodb.net/StudentDatabase");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

connectDB();

// Define a Mongoose model for students.
const Student = mongoose.model('Student', {
    stdnum : Number,
    fname: String,
    lname: String,
    age: Number
});

// Insert a new student into the database.
const saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;
        await Student.create({ stdnum, fname, lname, age });
        res.send({ inserted: true });
    } catch (error) {
        res.send({ inserted: false });
    }
}

// Update details for an existing student.
const updateStudent = async (req, res) => {
    try {
        await Student.updateOne({ fname: "Mary Jane" }, { $set: { lname: "Parker" } });
        res.send({ updated: true });
    } catch (error) {
        res.send({ updated: false });
    }
}

// Remove a specific student from the database by student number.
const removeUser = async (req, res) => {
    try {
        await Student.deleteOne({ stdnum: req.body.stdnum });
        res.send({ removed: true });
    } catch (error) {
        res.send({ removed: false }); // Corrected typo from 'fddalse' to 'false'.
    }
}

// Remove all student entries from the database.
const removeAllUsers = async (req, res) => {
    try {
        await Student.deleteMany();
        res.send({ deleted: true });
    } catch (error) {
        res.send({ deleted: false });
    }
}

// Retrieve details of a student by student number.
const findUserByUsername = async (req, res) => {
    try {
        const user = await Student.find({ stdnum: req.query.stdnum });
        res.send(user);
    } catch (error) {
        res.send([]);
    }
}

// Retrieve details of all students in the database.
const getAllMembers = async (req, res) => {
    try {
        const members = await Student.find();
        res.send(members);
    } catch (error) {
        res.send([]);
    }
}

// Export the functions to make them available for import in other files.
export { saveStudent, updateStudent, removeUser, removeAllUsers, findUserByUsername, getAllMembers };
