const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const validateUserToken = require('../Middleware/userVerification');

router.get("/", validateUserToken,projectController.getAllProjects);
router.post("/add", validateUserToken,projectController.createProject);
router.post("/addfile/:id",validateUserToken, projectController.addfile);
router.put("/editfile/:projectId/:fileId", projectController.editFileInProject);
router.get("/getfile/:id", projectController.getProjectFiles);
router.delete(
  "/deletefile/:projectId/:fileId",
  projectController.deleteFileFromProject
);

module.exports = router;
