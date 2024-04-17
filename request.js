import needle from 'needle';

const baseURL = 'http://localhost:3000';

// Add a new student, "Mary Jane Watson", to the database.
const testSaveStudent = async () => {
    const payload = {
        stdnum: 8051495845,
        fname: 'Mary Jane',
        lname: 'Watson',
        age: 20
    };
    const response = await needle('post', `${baseURL}/save-student`, payload, { json: true });
    console.log('Save Student:', response.body);
};

// Update the last name of "Mary Jane" to "Parker".
const testUpdate = async () => {
    const response = await needle('post', `${baseURL}/update`, null, { json: true });
    console.log('Update:', response.body);
};

// Remove the student record with student number.
const testRemoveUser = async () => {
    const payload = {
        stdnum: 8051495845
    };
    const response = await needle('post', `${baseURL}/remove-user`, payload, { json: true });
    console.log('Remove User:', response.body);
};

// Remove all students' details from the database.
const testRemoveAllUsers = async () => {
    const response = await needle('post', `${baseURL}/remove-all-user`, null, { json: true });
    console.log('Remove All Users:', response.body);
};

// Retrieve details for the student with student number.
const testUser = async () => {
    const stdnum = '8051495845';
    const response = await needle('get', `${baseURL}/user?stdnum=${stdnum}`);
    console.log('User:', response.body);
};

// Retrieve details for all students.
const testMembers = async () => {
    const response = await needle('get', `${baseURL}/members`);
    console.log('Members:', response.body);
};

// Uncomment the following lines to execute the corresponding functions:
testSaveStudent();
testUpdate();
// testRemoveUser();
// testRemoveAllUsers();
testUser();
testMembers();
