import User from "../model/User.js";
import PasswordEncrypt from '../config/PasswordEncrypt.js'
import { LocalStorage } from 'node-localstorage';
import Mail from '../Mailer/RegisterEmail.js';
import Course from '../model/CourseSchema.js';
import dotenv from 'dotenv';
dotenv.config();
export default class userController {

    // config  =  new PasswordEncrypt();
    localStorage = new LocalStorage('./scratch');

    // Adding USer to DB
    addUser = async (req, res) => {
        const { userName, userEmail, userPassword, userDOB, userMob, userAddress, userProof, userBio, enroll,profile} = req.body;
        const data = {
            userName,
            userEmail,
            userPassword,
            userDOB,
            userMob,
            userAddress,
            userProof,
            userBio,
            userRole:'student',
            enroll,
            profile
        }

        console.log(data);

        if (!this.isValidPassword(userPassword)) {
            return res.status(400).json({ error: 'Password must have at least one letter (uppercase or lowercase), one digit, and one special symbol' });
        }

        data.userPassword = PasswordEncrypt.encryptText(userPassword, 'KeepCoding');
        const currentTime = new Date();
        data.time = currentTime.getMinutes();
        data.OTP = Math.floor(100000 + Math.random() * 900000);
        const exist = this.localStorage.getItem('TempData');
        if (exist) {
            this.localStorage.removeItem('TempData')
        }
        const userJsonString = JSON.stringify(data);
        this.localStorage.setItem('TempData', userJsonString);
        Mail.sendMail(data);
        return res.json(`Varify Your Identity , We send you 6 digits OTP (Expires within 2 minutes) to ${req.body.userEmail}`);
    }

    // fetch All USer
    getAllUser = async (req, res) => {
       try{
           return res.json(await User.find({}).sort('-createdAt'));
       }catch(err){
         return console.log("There is Error While Fetching All User");
       }
    }

    // get User All Details
     getAllDetails = async (req, res) => {
        try {
            const users = await User.find({}).populate({
                path: 'courses',
                populate: {
                    path: 'modules',
                    populate: {
                        path: 'chapter'
                    }
                }
            });
            return res.json(users);
        } catch (err) {
            console.log("There is Error ", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    

    // Delete User
    deleteUser = async (req, res) => {
        try {
            const user = await User.findOneAndDelete({userEmail: req.params.userEmail });
            if (user){               
               const course = await Course.updateMany({student:user.id},{$pull:{student:user.id}})
                
                return res.json(`${user.userName} Your Account Deleted!!!`)
            } else {
                return res.json(`User Not Exist!!!!!!!!!!`)
            }
        } catch (err) {
            return console.log("There is Error while Deleting User", err);
        }
    }
    // Update User 
    updateUser = async (req, res) => {
        try {
            const userEmail = req.params.userEmail;
            const updates = req.body;
            const updatedUser = await User.findOneAndUpdate(
                { userEmail: userEmail },
                { $set: updates },
                { new: true } // To return the updated document
            );
            if (updatedUser) {
                return res.json(updatedUser);
            } else {
                return res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            console.error("Error occurred while updating user:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };


    // Fetch single User
    fetchSingleUser = async (req, res) => {
        try{
            return res.json(await User.findOne({userEmail:req.params.userEmail}))
        }catch(err){
            return console.log("There is Error while Fetching Single User",err);
        }
    }

    varifyUser = async (req, res) => {
        const OTP = req.body.OTP;
        
        const temp = this.localStorage.getItem('TempData');
        const data = JSON.parse(temp);
        const currentTime = new Date().getMinutes();

        if (Math.abs(currentTime - data.time) < 2) {
            if (OTP == data.OTP) {
                delete data.OTP;
                delete data.time;
                const user = await User.create(data);
                this.localStorage.removeItem('TempData');
                return res.json(user)
            } else {
                return res.json({flag:'true'})
            }
        } else {
            console.log("expires");
            return res.json({expire:true})
        }

    }

    resend = async (req, res) => {
        try {
            const temp = this.localStorage.getItem('TempData');
            const data = JSON.parse(temp);
            console.log(data);
            const currentTime = new Date();
            data.time = currentTime.getMinutes();
            data.OTP = Math.floor(100000 + Math.random() * 900000);
            this.localStorage.removeItem('TempData');
            this.localStorage.setItem("TempData", JSON.stringify(data));
            Mail.sendMail(data);
            return res.json(`Varify Your Identity , We send you 6 digits OTP (Expires within 2 minutes) to ${data.userEmail}`);

        } catch (err) {
            return res.json(`Something went Wrong ${err}`);

        }


    }


    isValidPassword = (password) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return regex.test(password);
    };

    AssignCourse = async (req, res) => {
        try {
            const { userEmail, courseName } = req.body;
            const user = await User.findOne({ userEmail });

            if (user) {
                const course = await Course.findOne({ name: courseName });
                if (course) {
                    user.courses.push(course);
                    user.save();
                    course.student.push(user);
                    course.save();
                    return res.json(user);
                }else{return res.json(`Course Not Exist !!!!!!!`)}
            }else{
                return res.json(`User Not Exist!!!!!`);
            }
        } catch (err) {
            return console.log("There is Error While You Assign Course!!!!!!!!", err);
        }
    }

    // login
    userLogin = async (req,res)=>{
        return res.status(200).json(req.user);
    }

}