const fs = require("fs");
const util = require('util');

class Database {

    constructor() {
    }
    
    getTables = () => {
        let file = fs.readFileSync("tables.json", 'utf8');
        return JSON.parse(file);
    };

    setTables(array) {
        let data = JSON.stringify(array);
        fs.writeFileSync("tables.json", data, (err) => {
            if(err)
                console.log(err);
        });
    }

    getWaitlist () {
        let file = fs.readFileSync("waitlist.json", 'utf8');
        return JSON.parse(file);
    }

    setWaitlist = array => {
        let data = JSON.stringify(array);
        fs.writeFileSync("waitlist.json", data, (err) => {
            if(err)
                console.log(err);
        });
    }

    clearDb() {
        fs.writeFileSync("tables.json", "[]", (err) => {
            if(err)
                console.log(err);
        });
        fs.writeFileSync("waitlist.json", "[]", (err) => {
            if(err)
                console.log(err);
        });
    }
}

module.exports = Database;