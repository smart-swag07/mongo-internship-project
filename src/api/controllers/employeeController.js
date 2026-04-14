const Employee = require("../../domain/models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.findEmployeeByEmail = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      email: req.params.email
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findEmployeeByName = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      name: req.params.name
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getHighSalaryEmployees = async (req, res) => {
  try {

    const employees = await Employee.find({
      salary: { $gt: 30000 }
    });

    res.json(employees);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getHREmployees = async (req, res) => {
  try {

    const employees = await Employee.find({
      department: "HR"
    });

    res.json(employees);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getEmployeesBySalaryRange = async (req, res) => {
  try {

    const employees = await Employee.find({
      salary: { $gte: 30000, $lte: 60000 }
    });

    res.json(employees);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getEmployeesStartingWithA = async (req, res) => {
  try {

    const employees = await Employee.find({
      name: { $regex: "^A" }
    });

    res.json(employees);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};  
exports.averageSalary = async (req, res) => {
  try {

    const result = await Employee.aggregate([
      {
        $group: {
          _id: null,
          averageSalary: { $avg: "$salary" }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.highestSalaryEmployee = async (req, res) => {
  try {

    const result = await Employee.aggregate([
      { $sort: { salary: -1 } },
      { $limit: 1 }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.employeeNameSalary = async (req, res) => {
  try {

    const result = await Employee.aggregate([
      {
        $project: {
          name: 1,
          salary: 1,
          _id: 0
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.employeeCountByDepartment = async (req, res) => {
  try {

    const result = await Employee.aggregate([
      {
        $group: {
          _id: "$department",
          totalEmployees: { $sum: 1 }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.sortEmployeesBySalary = async (req, res) => {
  try {

    const result = await Employee.aggregate([
      { $sort: { salary: -1 } }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};