import { saveStudent, updateStudent, removeUser, removeAllUsers, findUserByUsername, getAllMembers } from './controller.js';

// routes for handling requests
const router = (app) =>{
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUsers);
    app.get('/user', findUserByUsername);
    app.get('/members', getAllMembers)
}

export default router;