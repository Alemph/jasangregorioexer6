import mongoose from 'mongoose';

// connects to mongodb
async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://jlsangregorio:xvpJ6EPxw32IOjgd@cluster0.na6nkrh.mongodb.net/StudentDatabase");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

connectDB();

const Student = mongoose.model('Student',
    {
        stdnum : Number,
        fname: String,
        lname: String,
        age: Number
    });

// saves a new student's details
const saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;
        await Student.create({ stdnum, fname, lname, age });
        res.send({ inserted: true });
    } catch (error) {
        res.send({ inserted: false });
    }
}

// updates a student's details
const updateStudent = async (req, res) => {
    try {
        // updates "Mary Jane"s last name to "Parker"
        await Student.updateOne({ fname: "Mary Jane" }, { $set: { lname: "Parker" } });
        res.send({ updated: true });
    } catch (error) {
        res.send({ updated: false });
    }
}

// removes a student's details
const removeUser = async (req, res) => {
    try {
        await Student.deleteOne({ stdnum: req.body.stdnum });
        res.send({ removed: true });
    } catch (error) {
        res.send({ removed: fddalse });
    }
}

// removes all student's details
const removeAllUsers = async (req, res) => {
    try {
        const result = await Student.deleteMany();
        res.send({ deleted: true });
    } catch (error) {
        res.send({ deleted: false });
    }
}

// finds a student's details using their student number
const findUserByUsername = async (req, res) => {
    try {
        const user = await Student.find({ stdnum: req.query.stdnum });
        res.send(user);
    } catch (error) {
        res.send([]);
    }
}

// gets all students' details
const getAllMembers = async (req, res) => {
    try {
        const members = await Student.find();
        res.send(members);
    } catch (error) {
        res.send([]);
    }
}

export { saveStudent, updateStudent, removeUser, removeAllUsers, findUserByUsername, getAllMembers };