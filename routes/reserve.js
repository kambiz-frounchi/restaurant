const path = require(`path`);
const router = require (`express`).Router();
const Database = require('../database');
const db = new Database();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/reserve.html"));
});

router.post("/", (req, res) => {
    let tables = db.getTables();
    let waitlist = db.getWaitlist();

    console.log(tables);
    console.log(waitlist);


    let customer = req.body;

    if(tables.length < 5) {
        tables.push(customer);
    }
    else
    {
        waitlist.push(customer);
    }
    
    db.setTables(tables);
    db.setWaitlist(waitlist);
    
    console.log('This should be second');
    console.log(tables);
    console.log(waitlist);

    //process the reservation request
    res.send("post");
});

module.exports = router;