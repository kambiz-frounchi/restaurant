const router = require (`express`).Router();
const path = require(`path`);
const Database = require('../database');
const db = new Database();

router.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/tables.html"));
});
  
router.get("/api/tables", function(req, res) {
    return res.json(db.getTables());
});

module.exports = router;

