const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
    try {
        const dbEmployees = await Employee.find();
        res.render('index', { employees: dbEmployees });
    } catch (error) {
        console.error("Error fetching employees: ", error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect('/employees');
    } catch (error) {
        console.error("Error deleting employee: ", error);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/:id', async (req, res) => {
    const { firstName, lastName, department } = req.body;
    try {
        await Employee.findByIdAndUpdate(req.params.id, { firstName, lastName, department });
        res.redirect('/employees');
    } catch (error) {
        console.error("Error updating employee: ", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/new', (req, res) => {
    res.render('add');
});

router.post('/', async (req, res) => {
    const { firstName, lastName, department } = req.body;

    try {
        await Employee.create({ firstName, lastName, department });
        res.redirect('/employees');
    } catch (error) {
        console.error("Error creating employee: ", error);
        res.render('add', {
            error: "Failed to create employee. Please ensure all fields are filled correctly.",
            employeeData: { firstName, lastName, department }
        });
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        res.render('edit', { employee });
    } catch (error) {
        console.error("Error fetching employee for edit: ", error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;
