import Stack from './01.Stack';

function divideByTwo(decNumber: number): string {
    let remStack = new Stack<number>();
     
    while(decNumber > 0) {
        let rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    let binaryString = "";

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideByTwo(232));