require('dotenv').config();
const express = require('express');
const app = express();
const controller = require('./controller/controller');

app.use(express.json());
app.post('/addschool', controller.addSchool);
app.get('/listschools', controller.listSchools);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));