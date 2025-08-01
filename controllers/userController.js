const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
    // استخراج التوكن من الهيدر مع حذف "Bearer "
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, 'secret');
    
    // البحث عن المستخدم بواسطة _id من التوكن
    const user = await User.findOne({ _id: data._id });
    if (!user) {
      throw new Error('User not found');
    }
    
    // إضافة المستخدم إلى req ليستفيد منها الميدلوير القادم
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Not authorized' });
  }
};

exports.createUser = async (req, res) => {
  try {
    // تحقق من وجود مستخدم بنفس الإيميل
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = new User(req.body);
    await user.save();

    // توليد توكن المصادقة للمستخدم الجديد
    const token = await user.generateAuthToken();

    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // التحقق من وجود المستخدم ومطابقة كلمة السر
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).send('Invalid login credentials');
    }
    
    // توليد توكن المصادقة للمستخدم
    const token = await user.generateAuthToken();
    
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).send('User not found');
    }
    
    updates.forEach(update => user[update] = req.body[update]);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
