const DB = require("./db.json");

const getMemberById = (memberId) => {
    try {
        const member = DB.members.find((member) => member.id === memberId);
        if (!member) {
            throw {
                status: 400,
                message: `Con't find member with the id '${memberId}'`,
            }
        }
        return member;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { getMemberById };