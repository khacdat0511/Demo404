const db = require('../ultis/ConnectDB');

const getAllUsers = async () => {
    try {
        const [results] = await db.promise().query('SELECT * FROM user_profile');
        return results;
    } catch (err) {
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const [results] = await db.promise().query('SELECT * FROM user_profile WHERE id = ?', [id]);
        return results[0];
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
};