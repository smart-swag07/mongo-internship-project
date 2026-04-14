const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);
router.get("/:email", employeeController.findEmployeeByEmail);
router.get("/salary/high", employeeController.getHighSalaryEmployees);
router.get("/department/hr", employeeController.getHREmployees);
router.get("/salary/range", employeeController.getEmployeesBySalaryRange);
router.get("/name/startA", employeeController.getEmployeesStartingWithA);
router.get("/salary/average", employeeController.averageSalary);
router.get("/salary/highest", employeeController.highestSalaryEmployee);
router.get("/name-salary", employeeController.employeeNameSalary);
router.get("/department/count", employeeController.employeeCountByDepartment);
router.get("/salary/sort", employeeController.sortEmployeesBySalary);
module.exports = router;