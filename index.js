import express from 'express';
const app = express();


import router from './router.js';   // import the router function
router(app);

app.listen(3000);