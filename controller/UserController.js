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

exports.getById = async (req, res) => {
  try {
    const users = await User.getUserById(req.params.id);
    if (!users) {
      return res.status(404).json({ error: "Không tìm thấy khách hàng" });
    }
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi lấy thông tin khách hàng" });
  }
};