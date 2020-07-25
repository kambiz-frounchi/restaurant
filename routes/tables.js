const router = require (`express`).Router();
const path = require(`path`);

router.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/tables.html"));
});
  
router.get("/api/tables", function(req, res) {
    //return res.json(...);
    return res.json({hello: "hello"});
});

module.exports = router;

