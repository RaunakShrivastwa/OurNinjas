import Exprience from "../../model/Exprience/Exprience.js";
import User from "../../model/User.js";

export default class ExprienceController {

    // add exprience
    addExprience = async (req, res) => {
        console.log(req.body);
        console.log("params",req.params.userEmail);
        try {
            const user = await User.findOne({ userEmail: req.params.userEmail });
            if (user) {
                return res.status(201).json(await Exprience.create(req.body));
            }
            return res.status(401).json({ Error: 'User does not exist' });

        } catch (err) {
            return console.log("There is Erorr", err);
        }
    }

    // get All Exprience
    getAllExprience = async (req, res) => {
        console.log(req.params.userEmail);
        try {
            const exprience = await Exprience.find({ user: req.params.userEmail });
            console.log(exprience);
            return res.status(200).json(exprience);
        } catch (err) {
            return console.log("There is Error", err);
        }
    }

    deleteExprience = async (req, res) => {
        console.log(req.params.id);
        try {
               const exprience = await Exprience.findByIdAndDelete(req.params.id);
               return res.status(200).json(exprience);
        }
        catch (err) {
            return console.log("There us Error", err);
        }
    }
}