const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const Project = require("../models/Project");

const projectController = {
  createProject: async (req, res) => {
    const { title } = req.body;
    const token = req.headers.authorization;
    console.log(token);

    jwt.verify(token.split(" ")[1], secretKey, async (err, decodedToken) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ message: "Unauthorized" });
      } else {
        const userId = decodedToken.userId;
        console.log("User ID:", userId);

        console.log(req.body);
        try {
          const newProject = new Project({
            title,
            user: userId,
          });
          await newProject.save();
          return res.status(201).json({
            message: "Project created successfully",
            name: newProject.title,
          });
        } catch (error) {
          console.error("Error creating project:", error);
          return res.status(500).json({ error: "Internal server error" });
        }
      }
    });
  },

  getAllProjects: async (req, res) => {
    const token = req.headers.authorization;

    if (!token || token === "Bearer null") {
      return res.status(400).json({ status: false, message: "No token" });
    }

    jwt.verify(token.split(" ")[1], secretKey, async (err, decodedToken) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ message: "Unauthorized" });
      } else {
        const userId = decodedToken.userId;
        console.log("User ID:", userId);

        try {
          const projects = await Project.find({ user: userId });

          if (!projects || projects.length === 0) {
            return res
              .status(200)
              .json({ status: false, message: "No projects found" });
          }

          res.json({ status: true, projects });
        } catch (error) {
          console.error("Error fetching projects:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      }
    });
  },

  editProjects: async (req, res) => {
    const { id } = req.params;
    const { title, description, projectName } = req.body;

    try {
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        { title, description, projectName },
        { new: true }
      );

      if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
      }

      res.json({
        message: "Project updated successfully",
        project: updatedProject,
      });
    } catch (error) {
      console.error("Error updating project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  addfile: async (req, res) => {
    const { id } = req.params;
    const { fileName, description } = req.body;
    console.log(req.body);
    console.log(id);
    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const newFile = {
        fileName,
        description,
        timeStamp: new Date(),
        status: "done",
      };

      project.files.push(newFile);

      await project.save();

      res.status(201).json({ message: "File added to project successfully" });
    } catch (error) {
      console.error("Error adding file to project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  editFileInProject: async (req, res) => {
    const { projectId, fileId } = req.params;
    const { fileName, description } = req.body;

    try {
      const project = await Project.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const file = project.files.find((file) => file._id.toString() === fileId);

      if (!file) {
        return res
          .status(404)
          .json({ message: "File not found in the project" });
      }

      file.fileName = fileName;
      file.description = description;

      await project.save();

      res.json({ message: "File edited in the project successfully" });
    } catch (error) {
      console.error("Error editing file in project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteFileFromProject: async (req, res) => {
    const { projectId, fileId } = req.params;

    try {
      const project = await Project.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const fileIndex = project.files.findIndex(
        (file) => file._id.toString() === fileId
      );

      if (fileIndex === -1) {
        return res
          .status(404)
          .json({ message: "File not found in the project" });
      }

      project.files.splice(fileIndex, 1);

      await project.save();

      res.json({ message: "File deleted from the project successfully" });
    } catch (error) {
      console.error("Error deleting file from project:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getProjectFiles: async (req, res) => {
    const { id } = req.params;

    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      res.status(200).json({ files: project.files });
    } catch (error) {
      console.error("Error retrieving project files:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = projectController;
