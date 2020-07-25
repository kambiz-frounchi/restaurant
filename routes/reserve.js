const path = require(`path`);
const router = require (`express`).Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/reserve.html"));
});

router.post("/", function(req, res) {
    //process the reservation request
    res.send("post");
});

module.exports = router;