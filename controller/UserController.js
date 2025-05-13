const User = require("../model/UserModel");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.getAllUsers();
    res.status(200).json(Users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi lấy danh sách khách hàng" });
  }
};
