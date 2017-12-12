require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, str) => {
    let sum = 0;
    console.log(str.length);
    for(var i = 0; i < str.length; i++) {
        if(str[i] == str[(i + 1) % str.length]) {
            sum += parseInt(str[i]);
        }
    }
    sum;
});
