require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, str) => {    
    let result = str.split(/\r?\n/).reduce((sum, row) => {
        let numbers = row.split("\t").map(Number);
        return sum + Math.max.apply(null, numbers) - Math.min.apply(null, numbers);        
    },0)
    console.log(result);
});
