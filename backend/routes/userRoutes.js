const express = require("express");
const {
  createOrUpdateUser,
  getUserByFirebaseUID,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createOrUpdateUser);
router.get("/:uid", getUserByFirebaseUID);

module.exports = router;
