const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)

router.get('/signup', (req, res) => {
  res.render('user/Signup', { user: {} })
})

router.get('/login', (req, res) => {
  res.render('user/Login', { user: {} })
})

router.get("/main", userController.auth, (req, res) => {
    console.log("👀 User sent to view:", req.user);
    res.render("user/MainUser", { user: req.user });
});


module.exports = router;
