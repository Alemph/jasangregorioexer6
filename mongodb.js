import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb+srv://jlsangregorio:sNmqK9aYzUooYQZA@cluster0.na6nkrh.mongodb.net/ICS');

const Student = mongoose.model('students', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  })

let data = await Student.find({ age: 17 });
console.log(data);

const newStudent = new Student({
    stdnum: 12345678,
    fname: "Juan",
    lname: "dela Cruz",
    age: 17
});

await newStudent.save();