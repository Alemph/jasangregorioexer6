import needle from 'needle';

const baseURL = 'http://localhost:3000';

// Save Student 1
needle.post('http://localhost:3000/save-student', {
    stdnum: "1111111111",
    fname: "James",
    lname: "Jameson",
    age: 18
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Save Student 2
needle.post('http://localhost:3000/save-student', {
    stdnum: "2222222222",
    fname: "Green",
    lname: "Goblin",
    age: 19
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Save Student 3
needle.post('http://localhost:3000/save-student', {
    stdnum: "3333333333",
    fname: "Venom",
    lname: "Carnage",
    age: 17
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Save Student 4
needle.post('http://localhost:3000/save-student', {
    stdnum: "12345678",
    fname: "Gwenyth",
    lname: "Stacey",
    age: 21
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Save Student 5
needle.post('http://localhost:3000/save-student', {
    stdnum: "8051495845",
    fname: "Mary Jane",
    lname: "Watson",
    age: 20
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Update last name
needle.post('http://localhost:3000/update', {
    fname: "Mary Jane"
}, (err, res) => {
    if (err) {
        console.error("ERROR:", err);
    } else {
        console.log(res.body);
    }
});

// // Remove a user from the database
// needle.post('http://localhost:3000/remove-user', {
//     stdnum: "12345678"
// }, (err, res) => {
//     if (err) {
//         console.error("ERROR", err);
//     } else {
//         console.log(res.body);
//     }
// });

// // Remove all users from the database
// needle.post('http://localhost:3000/remove-all-user', {}, (err, res) => {
//     if (err) {
//         console.error("ERROR", err);
//     } else {
//         console.log(res.body);
//     }
// });

// // Get user information by student number
// needle.get('http://localhost:3000/user?stdnum=8051495845', (err, res) => {
//     if (err) {
//         console.error("ERROR:", err);
//     } else {
//         console.log(res.body);
//     }
// });

// // Get all members
// needle.get('http://localhost:3000/members', (err, response) => {
//     if (err) {
//         console.error("ERROR:", err);
//     } else {
//         console.log(response.body);
//     }
// });
