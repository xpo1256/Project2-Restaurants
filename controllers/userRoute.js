const express = require('express');
const router = express.Router();
const userController = require('./userController');

// 🔐 API Routes
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.auth, userController.deleteUser);

// 🧭 Page Rendering Routes
router.get('/signup', (req, res) => {
  res.render('user/Signup', { user: {} });
});

router.get('/login', (req, res) => {
  res.render('user/Login', { user: {} });
});

router.get('/contact', (req, res) => {
  res.render('user/contact', { user: {} });
});

router.get('/about', (req, res) => {
  res.render('user/about');
});

router.get('/main', userController.auth, (req, res) => {
  console.log("👀 User sent to view:", req.user);
  res.render('user/MainUser', { user: req.user });
});

// ✅ FIXED: Correct order of req/res + ensure JSX component is valid
router.get('/mainadmin', userController.auth, (req, res) => {
  res.render('user/MainAdmin'); // Assumes MainAdmin.jsx is a valid React component
});

// 🚪 Optional: Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('authToken');
  res.redirect('/login'); // Adjust the path if you're using a custom route
});

module.exports = router;
