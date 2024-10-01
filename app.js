const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const employeeRoute = require('./routes/employee');
const Employee = require('./models/Employee'); // Ensure the path is correct

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const sampleEmployees = [
    { lastName: "Christensen", firstName: "Alfred", department: "General Dentistry" },
    { lastName: "Dudley", firstName: "John", department: "General Dentistry" },
    { lastName: "Doe", firstName: "Janet", department: "General Dentistry" },
    { lastName: "Willard", firstName: "Francisco", department: "Pediatric Dentistry" },
    { lastName: "Alvarez", firstName: "Sarah", department: "Pediatric Dentistry" },
    { lastName: "Harris", firstName: "Lisa", department: "Restorative Dentistry" },
    { lastName: "Perez", firstName: "Danny", department: "Restorative Dentistry" },
    { lastName: "Smith", firstName: "Constance", department: "Surgery" },
    { lastName: "Roche", firstName: "Leslie", department: "Orthodontics" }
];

const addSampleEmployees = async () => {
    try {
        const employeeCount = await Employee.countDocuments();
        if (employeeCount === 0) {
            await Employee.insertMany(sampleEmployees);
            console.log("Sample employees added to the database.");
        } else {
            console.log("Database already contains employees.");
        }
    } catch (error) {
        console.error("Error adding sample employees: ", error);
    }
};

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/employee_management';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    return addSampleEmployees();
})
.catch(err => console.error("Error connecting to MongoDB: ", err));

app.use('/employees', employeeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
