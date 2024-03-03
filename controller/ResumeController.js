import resume from "../model/ResumeSchema.js";
import user from "../model/User.js";

export default class ResumeController {
    async addResume(req, res) {
        try {
            const User = await user.findById(req.body.user);
            if (user) {
                const Resume = await resume.create(req.body);
                if (Resume) {
                    User.resume.push(Resume);
                    User.save();

                    return res.json({
                        "message": "Resume saved successfully",
                        Resume
                    })
                } else {
                    return res.json({
                        "message": "Resume not saved successfully",
                        User
                    })
                }
            } else {
                return res.json({
                    "message": "User not found. So, we can't add resume"
                })
            }
        } catch (error) {
            return res.status(501).json({
                "message": "Add Resume we got error",
                error
            });
        }
    }

    async getAllResume(req, res) {
        try {
            const Resume = await resume.find({}).populate({
                path: 'user',
                select: 'userName'
            });
            return res.json({
                Resume
            })
        } catch (error) {
            return res.json({
                "message": error
            })
        }
    }

    async getResumeByID(req, res) {
        try {
            const Resume = await resume.findById(req.params.id).populate({
                path: 'user',
                select: 'userName'
            });
            if (Resume)
                return res.json({
                    Resume
                })
            else
                return res.json({
                    "message": "resume not founded"
                })
        } catch (error) {
            return res.json({
                "message": error
            })
        }
    }

    async updateResume(req, res) {
        try {
            const updateResume = await resume.findByIdAndUpdate(req.params.id, { $set: req.body });

            if (updateResume) {
                return res.status(200).json({
                    "message": "Resume updated successfully .....",
                    updateResume
                });
            } else {
                return res.status(404).json({
                    "message": "Resume not found ....."
                });
            }
        } catch (error) {
            return res.status(500).json({
                "message": "Internal Server Error .....",
                error
            });
        }
    }

    async deleteResume(req, res) {
        try {
            const Resume = await resume.findByIdAndDelete(req.params.id);
            console.log(Resume.user);
            if (Resume) {
                const User = await user.findById(Resume.user);
                console.log("User : ",User);
                if (User) {
                    User.resume.pull(Resume);
                    User.save();

                    return res.json({
                        Resume
                    })
                } else
                    return res.json({
                        "message": "user not found"
                    })
            } else
                return res.json({
                    "message": "resume not found"
                })
        } catch (error) {
            return res.json({
                "message": "error",
                error
            })
        }
    }
}