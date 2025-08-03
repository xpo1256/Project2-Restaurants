const Restaurant = require("../models/rest");

exports.create = async (req, res) => {
  try {
    const { name, url, orderName, typeFood, Describes } = req.body;
    const restaurant = new Restaurant({ name, url, orderName, typeFood, Describes });
    await restaurant.save();
    res.redirect('/adminroute/dishly/mainadmin?success=true')
  } catch (error) {
    console.error(error);
    res.redirect("/adminroute/dishly/mainadmin?success=false")
  }
};