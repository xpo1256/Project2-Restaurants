const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ميدلوير للتحقق من التوكن الموجود في الكوكيز وحماية المسارات الخاصة
exports.auth = async (req, res, next) => {
  try {
    // نجيب التوكن من الكوكيز المسماة authToken
    const token = req.cookies.authToken;
    if (!token) throw new Error('No token found');

    // نفك التوكن ونستخرج بيانات المستخدم منه
    const data = jwt.verify(token, 'secret');

    // نبحث عن المستخدم في قاعدة البيانات بناءً على الـ _id الموجود في التوكن
    const user = await User.findById(data._id);
    if (!user) throw new Error('User not found');

    // نحفظ بيانات المستخدم في req ليستفيد منها الميدلوير أو الراوتر التالي
    req.user = user;
    next();
  } catch (err) {
    // في حال فشل التحقق نرجع رسالة خطأ
    res.status(401).send({ message: 'Not authorized' });
  }
};

// تسجيل مستخدم جديد
exports.createUser = async (req, res) => {
  try {
    // نتحقق إذا البريد مسجل مسبقاً
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // نشفر كلمة السر قبل الحفظ
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // ننشئ مستخدم جديد ونحفظه
    const user = new User({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword
    });

    await user.save();

    // نولد توكن جديد للمستخدم بعد التسجيل
    const token = user.generateAuthToken();

    // نرسل التوكن مع بيانات المستخدم في الكوكيز
    res.cookie('authToken', token, { httpOnly: true });
    res.status(201).json({
      message: 'User created successfully',
      user: { nickname: user.nickname, email: user.email }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid login credentials');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid login credentials');

    const token = user.generateAuthToken();

    res.cookie('authToken', token, { httpOnly: true });

    // إعادة توجيه لصفحة main (يتم فيها قراءة الكوكيز وعرض اسم المستخدم)
    return res.redirect("/dishly/main");

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// تحديث بيانات المستخدم (مثل تعديل الاسم، كلمة السر، ...الخ)
exports.updateUser = async (req, res) => {
  try {
    // نأخذ الحقول التي يريد المستخدم تحديثها
    const updates = Object.keys(req.body);

    // نبحث عن المستخدم بناءً على الـ id الموجود في الرابط
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');

    // نحدث الحقول التي تم ارسالها، مع تشفير كلمة السر إذا تم تعديلها
    for (let update of updates) {
      if (update === 'password') {
        user.password = await bcrypt.hash(req.body.password, 10);
      } else {
        user[update] = req.body[update];
      }
    }

    await user.save();

    // نرسل بيانات المستخدم بعد التحديث كرد
    res.json({
      message: 'User updated successfully',
      user: { nickname: user.nickname, email: user.email }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// حذف المستخدم (يتم التأكد من المستخدم عبر ميدلوير auth قبل الحذف)
exports.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
