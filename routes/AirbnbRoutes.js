import express from "express"
import { checksForRegister, isUserValid } from "../middlewares/authMiddleware.js";
import { Calendar, findLocationsByQuery, register, searchByGEOCoordinates, searchByLocation } from "../controllers/userController.js";

var router = express.Router();


router.post('/register',checksForRegister,register);
router.get('/searchByLocation',isUserValid,searchByLocation);
router.get('/Calendar',isUserValid,Calendar);
router.get('/findLocationsByQuery',isUserValid,findLocationsByQuery);
router.get('/searchByGEOCoordinates',isUserValid,searchByGEOCoordinates);



export  default router;