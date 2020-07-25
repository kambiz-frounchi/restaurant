const router = require (`express`).Router();
const path = require(`path`);
const Database = require('../database');
const db = new Database();

router.get("/api/waitlist", function(req, res) {
    return res.json(db.getWaitlist());
});

module.exports = router;