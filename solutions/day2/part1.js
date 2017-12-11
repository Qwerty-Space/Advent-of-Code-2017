require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, str) => {    
    let rows = str.split(/\r?\n/);
    let checksum = 0;
    console.log(rows);
    for(let row of rows) {
        console.log(row);
        let numbers = row.split("\t").map(Number);
        console.log(numbers);
        let max = Math.max.apply(null, numbers);
        let min = Math.min.apply(null, numbers);
        let dif = max - min;
        checksum += dif;
    }
    console.log(checksum);
});