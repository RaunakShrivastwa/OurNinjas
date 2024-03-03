import Course from '../model/CourseSchema.js';
import Module from '../model/Modules/Module.js';
import Chapter from '../model/Chapters/Chapter.js';
import SubTopic from '../model/subTopic/SubTopic.js';

export default class CourseController {
    async createCourse(req, res) {
        try {
            const course = await Course.findOne({ name: req.body.name });

            if (course) {
                return res.json({
                    "message": "Already Available",
                    course
                });
            } else {
                const courseCreated = await Course.create({ ...req.body });
                return res.json({
                    "message": "Course Created Successfully",
                    courseCreated
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                "message": "Something went wrong",
                error
            });
        }
    }

    async getAllCourse(req, res) {
        try {
            const course = await Course.find({});

            if (course) {
                return res.json({
                    "message": "Fetch All Course successfully .....",
                    course
                });
            } else {
                return res.json({
                    "message": "Course not found",
                    course
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong during find course",
                error
            });
        }
    }

    async getCourseByName(req, res) {
        try {
            const courseInfo = await Course.findOne({ name: req.params.courseName });
            if (courseInfo) {
                return res.json({
                    "message": "Course fetch successfully ..... ",
                    courseInfo
                });
            } else {
                return res.json({
                    "message": "Course not founded"
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong",
                error
            });
        }
    }

    async updateCourse(req, res) {
        try {
            const updateCourse = await Course.findOneAndUpdate({ name: req.params.name },
                { $set: req.body });
            if (updateCourse) {
                return res.json({
                    "message": "Course updated successfully .....",
                    updateCourse
                });
            } else {
                return res.json({
                    "message": "Course not founded"
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong during update the course",
                error
            });
        }
    }

     deleteCourse = async (req, res) => {
        const courseName = req.params.name;
    
        try {
            // Find the course by name
            const course = await Course.findOne({ name: courseName });
    
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
    
            // Find all modules that are related to the course
            const modules = await Module.find({ enrollCourse: courseName });
    
            // Loop through each module to delete its related chapters and subtopics
            for (const module of modules) {
                // Find chapters related to the module
                const chapters = await Chapter.find({ moduleName: module.name });
    
                // Loop through each chapter to delete its related subtopicsname
                for (const chapter of chapters) {
                    await SubTopic.deleteMany({ Chapter: chapter.name });
                }
    
                // Delete chapters related to the module
                await Chapter.deleteMany({ moduleName: module.name });
            }
    
            // Delete all modules related to the course
            await Module.deleteMany({ enrollCourse: courseName });
    
            // Delete the course itself
            await Course.findOneAndDelete({ name: courseName });
    
            res.status(200).json({ message: 'Course and related modules, chapters, and subtopics deleted successfully' });
        } catch (error) {
            console.error('Error deleting course:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
}