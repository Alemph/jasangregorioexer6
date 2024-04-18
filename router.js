import { saveStudent, updateStudent, deleteStudent, deleteAllStudents, getStudent, getAllStudents } from './controller.js';

// routes for handling requests
const router = (app) =>{
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', deleteStudent);
    app.post('/remove-all-user', deleteAllStudents);
    app.get('/user', getStudent);
    app.get('/members', getAllStudents)
}

export default router;