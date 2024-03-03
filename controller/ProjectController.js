import projectSchema from '../model/ProjectSchema.js';
import UserSchema from '../model/User.js';

export default class ProjectController {
    async getAllProject(req, res) {
        try {
            const projects = await projectSchema.find({}).populate('Student');
            if (projects.length > 0) {
                return res.status(200).json({
                    "message": "Fetch All projects successfully .....",
                    projects
                });
            } else {
                return res.status(404).json({
                    "message": "There is no any Project available ....."
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "There is something error found in fetching projects .....",
                error
            });
        }
    }

    async createProject(req, res) {
        try {
            const user = await UserSchema.findById(req.body.Student);
            if (user) {
                const project = await projectSchema.create({ ...req.body });
                user.projects.push(project);
                user.save();
                return res.status(201).json({
                    "message": "Create project successfully .....",
                    project
                });
            } else {
                return res.status(404).json({
                    "message": "User not available so the project will not be created .....",
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "There is something error found in creating projects .....",
                error
            });
        }
    }

    async getProjectByUser(req, res) {
        try {
            const project = await projectSchema.findById(req.params.id).populate('Student');
            if (project) {
                return res.status(200).json({
                    "message": "Fetch project successfully .....",
                    project
                });
            } else {
                return res.status(404).json({
                    "message": "Project not found ....."
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "There is something error found in fetching projects .....",
                error
            });
        }
    }

    async updateProject(req, res) {
        try {
            const updateProject = await projectSchema.findByIdAndUpdate(req.params.id, { $set: req.body });

            if (updateProject) {
                return res.status(200).json({
                    "message": "Project updated successfully .....",
                    updateProject
                });
            } else {
                return res.status(404).json({
                    "message": "Project not found ....."
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "Internal Server Error .....",
                error
            });
        }
    }

    async deleteProject(req, res) {
        try {
            const project = await projectSchema.findByIdAndDelete(req.params.id);

            if (project) {
                const user = await UserSchema.findById(project.Student);

                if (user) {
                    user.projects.pull(project);
                    user.save();
                    return res.status(200).json({
                        "message": "Project deleted successfully .....",
                        project
                    });
                } else {
                    return res.status(404).json({
                        "message": "User not found ....."
                    });
                }
            } else {
                return res.status(404).json({
                    "message": "Project not found ....."
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "Error deleting project by the userID .....",
                error
            });
        }
    }
}
