const Member = require("../database/Member");

const getMemberById = (memberId) => {
    try {
        const member = Member.getMemberById(memberId);
        return member;
    } catch (error) {
        throw error;
    }
}

module.exports = { getMemberById };