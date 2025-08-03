const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

// 🛡️ مصادقة التوكن
exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if (!token) throw new Error('No token found');

    const data = jwt.verify(token, 'secret');
    const user = await User.findById(data._id);
    if (!user) throw new Error('User not found');

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Not authorized' });
  }
};

// 👤 إنشاء مستخدم جديد
exports.createUser = async (req, res) => {
  try {
    const { nickname, password, email, role } = req.body;
    const roleUser = role?.toLowerCase()?.trim() === 'admin' ? 'admin' : 'user';

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = new User({
      nickname,
      email,
      password,
      role: roleUser,
    });

    await user.save();

    const token = user.generateAuthToken();
    res.cookie('authToken', token, { httpOnly: true });
    res.redirect('/dishly/login');
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: 'Server error during user creation' });
  }
};

// 🔓 تسجيل الدخول
exports.loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send('Email not registered');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Incorrect password');

    const normalizedRole = role?.toLowerCase()?.trim();
    if (user.role !== normalizedRole) return res.status(403).send('Role mismatch');

    const token = user.generateAuthToken();
    res.cookie('authToken', token, { httpOnly: true });

    if (normalizedRole === 'user') {
      return res.redirect("/dishly/main");
    } else if (normalizedRole === 'admin') {
      return res.redirect("/dishly/mainadmin");
    } else {
      return res.status(400).send('Invalid role');
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// ✏️ تعديل بيانات المستخدم
exports.updateUser = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');

    for (let field of updates) {
      if (field === 'password') {
        user.password = req.body.password; // سيتم تشفيرها تلقائيًا في pre("save")
      } else {
        user[field] = req.body[field];
      }
    }

    await user.save();

    res.json({
      message: 'User updated successfully',
      user: { nickname: user.nickname, email: user.email }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 🗑️ حذف المستخدم
exports.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
