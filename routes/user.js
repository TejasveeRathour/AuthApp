const express = require("express");
const router = express.Router();

const User = require("../models/user");

const {login, signup} = require("../controllers/auth");
const {auth, isStudent, isAdmin} = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes for single middleware
router.get("/test", auth, (req, res) => {
    res.json(
        {
            success: true,
            message: "Welcome to the Protected route for TESTS",
        }
    );
});

//Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json(
        {
            success: true,
            message: "Welcome to the Protected route for Students",
        }
    );
});

//Protected Route for Admin
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json(
        {
            success: true,
            message: "Welcome to the Protected route for Admin",
        }
    );
});

// router.get("/getdetail", auth, async (req, res) => {
//     try{
//         const id = req.user.id;
//         console.log("ID: ", id);
//         const user  = await User.findById(id);

//         res.status(200).json(
//             {
//                 success: true,
//                 user: user,
//                 message: "Welcome to the get detail route",
//             }
//         );
//     }
//     catch(error){
//         res.status(500).json(
//             {
//                 success: false,
//                 error: error.message,
//                 message: "Something went wrong",
//             }
//         );
//     }
// });


module.exports = router;