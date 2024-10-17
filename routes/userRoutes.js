const express = require("express");
const { saveUserData, deleteUser, getUsers } = require("../controllers/userController");
const router = express.Router();

// Public routes
router.post("/save-data", saveUserData);

// Admin routes
router.get("/admin/users", getUsers);
router.delete("/admin/users/:id", deleteUser);

module.exports = router;
