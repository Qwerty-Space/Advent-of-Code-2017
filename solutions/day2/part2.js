require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, str) => {    
    let rows = str.split(/\r?\n/);
    let sum = 0;
    console.log(rows);
    for(let row of rows) {
        console.log(row);
        let numbers = row.split("\t").map(Number);
        console.log(numbers);
        for(let i = 0; i < numbers.length; i++) {
            for(let j = i + 1; j < numbers.length; j++) {
                if(numbers[i] % numbers[j] == 0) {
                    sum += numbers[i] / numbers[j];
                }
                if(numbers[j] % numbers[i] == 0) {
                    sum += numbers[j] / numbers[i];
                }
            }
        }
    }
    console.log(sum);
});
