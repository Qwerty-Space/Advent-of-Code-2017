require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, str) => {    
    let pass = str.split(/\r?\n/);
    let valid = 0;
    console.log(pass);
    for(let i = 0; i < pass.length; i++) {
        let words = pass[i].split(" ");
        let lineValid = true;
        for(let j = 0; j < words.length; j++) {
            words[j] = words[j].split("").sort().join("");
        }
        for(let j = 0; j < words.length; j++) {
            for(let k = j + 1; k < words.length; k++) {
                if(words[j] == words[k]) {
                    lineValid = false;
                }
            }
        }
        if(lineValid) {
            valid++;
        }
    }
    console.log(valid);
});
