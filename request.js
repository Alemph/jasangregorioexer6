import needle from 'needle';

const baseURL = 'http://localhost:3000';

// saves "Mary Jane Watson" as a new student
const testSaveStudent = async () => {
    const payload = {
        stdnum: 123456789,
        fname: 'Mary Jane',
        lname: 'Watson',
        age: 20
    };
    const response = await needle('post', `${baseURL}/save-student`, payload, { json: true });
    console.log('Save Student:', response.body);
};

// updates "Mary Jane"s last name to "Parker"
const testUpdate = async () => {
    const response = await needle('post', `${baseURL}/update`, null, { json: true });
    console.log('Update:', response.body);
};

// removes student with "123456789" as their student number
const testRemoveUser = async () => {
    const payload = {
        stdnum: 123456789
    };
    const response = await needle('post', `${baseURL}/remove-user`, payload, { json: true });
    console.log('Remove User:', response.body);
};

// removes all students' details
const testRemoveAllUsers = async () => {
    const response = await needle('post', `${baseURL}/remove-all-user`, null, { json: true });
    console.log('Remove All Users:', response.body);
};

// gets student's details with "123456789" as their student number
const testUser = async () => {
    const stdnum = '123456789';
    const response = await needle('get', `${baseURL}/user?stdnum=${stdnum}`);
    console.log('User:', response.body);
};

// gets all students' details
const testMembers = async () => {
    const response = await needle('get', `${baseURL}/members`);
    console.log('Members:', response.body);
};

testSaveStudent();
testUpdate();
// testRemoveUser();
testRemoveAllUsers();
testUser();
testMembers();