const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    department: {
        type: String,
        enum: ['General Dentistry', 'Pediatric Dentistry', 'Restorative Dentistry', 'Surgery', 'Orthodontics'],
        required: true
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
