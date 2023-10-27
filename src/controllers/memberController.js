const memberService = require("../services/memberService");

const getMemberById = (req, res) => {
    const { params: { memberId } } = req;
    if (!memberId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter 'memnetId' can not be empty" },
        });
    }
    try {
        const member = memberService.getMemberById(memberId);
        res.send({ status: "OK", data: member });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED", data: { error: error?.message || error }
        })
    }
};

module.exports = { getMemberById };