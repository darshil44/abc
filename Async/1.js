const fs = require("fs");

fs.readFile("/Volumes/Academics/Development/Backend/100xdevs/Async/1.txt", "utf-8", function(err, data) {
    console.log(data);
    
})
