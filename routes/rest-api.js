import express from 'express';
var router = express.Router();
import {index,add,edit,delete_d} from "../controllers/RestAPIController.js";
router.get("/", index);
router.post("/add", add);
router.post("/edit/:id", edit);
router.delete("/delete/:id", delete_d);
export default router;