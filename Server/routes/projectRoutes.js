const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getAllProjects);
router.post("/add", projectController.createProject);
router.post("/addfile/:id", projectController.addfile);
router.put("/editfile/:projectId/:fileId", projectController.editFileInProject);
router.get("/getfile/:id", projectController.getProjectFiles);
router.delete(
  "/deletefile/:projectId/:fileId",
  projectController.deleteFileFromProject
);

module.exports = router;
