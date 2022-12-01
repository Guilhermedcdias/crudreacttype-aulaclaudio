import express from "express";
import userControllers from "./controllers/userControllers";
const router = express.Router();

router.get("/getusers", userControllers.findAll);
router.get("/getuser/:id", userControllers.findOne);
router.post("/createuser", userControllers.create);
router.put("/updateuser/:id", userControllers.update);
router.delete("/deleteuser/:id", userControllers.destroy);



export { router };