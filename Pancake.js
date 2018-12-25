const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

let numTestcases = 0;
let caseNum = 0

 
rl.on('line', (line) => {
    //console.log(`L: ${line}`);
    if (numTestcases == 0) {
        numTestcases = parseInt(line);
        return;
    }

    caseNum++;
    let pancakeStr = line.split(" ")[0]
    let k = line.split(" ")[1];
    //console.log(`k: ${k}`);
    let totalFlips = 0;
    let isFlipped = [];
    for (let i = 0; i < pancakeStr.length; i++) {
        isFlipped.push(false);
    }

    //const LAST2CHARS = 2;
    let tooSmallToFlip = k-1;
    //console.log(`pancakeStr.length - tooSmallToFlip: ${pancakeStr.length - tooSmallToFlip}`);
    for (let i = 0; i < pancakeStr.length - tooSmallToFlip; i++) {
        if ((pancakeStr.charAt(i) == '-' && !isFlipped[i]) || pancakeStr.charAt(i) == '+' && isFlipped[i] ) {
            totalFlips++;
            for (let j = 0; j < k - 1; j++) {
                isFlipped[i + j + 1] = !isFlipped[i + j + 1];
                
            }
        }
        //console.log(JSON.stringify(isFlipped))

    }

    for(let i=0; i<tooSmallToFlip;i++){
        //console.log(`pancakeStr.charAt(pancakeStr.length - tooSmallToFlip + i + 1): ${pancakeStr.charAt(pancakeStr.length-1 - tooSmallToFlip + i + 1)}`)
        //console.log(`isFlipped[pancakeStr.length - tooSmallToFlip + i + 1]: ${isFlipped[pancakeStr.length-1 - tooSmallToFlip + i + 1]}`)
        if ((pancakeStr.charAt(pancakeStr.length -1 - tooSmallToFlip + i + 1) == '-' && !isFlipped[pancakeStr.length -1 - tooSmallToFlip + i + 1]) 
        || pancakeStr.charAt(pancakeStr.length -1 - tooSmallToFlip + i + 1) == '+' && isFlipped[pancakeStr.length -1 - tooSmallToFlip + i + 1] ){
            console.log(`Case #${caseNum}: IMPOSSIBLE`);
            return;
        }
    }






    console.log(`Case #${caseNum}: ${totalFlips}`)


});

rl.on('close', () => {
    //console.log('CLOSED');
});