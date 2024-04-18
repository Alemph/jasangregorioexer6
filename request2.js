import needle from 'needle';

const baseURL = 'http://localhost:3000';
// Remove a user from the database
needle.post('http://localhost:3000/remove-user', {
    stdnum: "8051495845"
}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});

// Remove all users from the database
needle.post('http://localhost:3000/remove-all-user', {}, (err, res) => {
    if (err) {
        console.error("ERROR", err);
    } else {
        console.log(res.body);
    }
});