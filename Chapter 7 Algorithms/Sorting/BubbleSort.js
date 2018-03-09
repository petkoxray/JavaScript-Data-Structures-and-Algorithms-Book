function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    return array;
}

let arr = [10, 20, 1, 5, -5, 12, 3];

let sortedArr = bubbleSort(arr);

console.log(sortedArr);

function improvedBubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    return array;
}

let secondArr = [10, 20, 1, 5, -5, 12, 3];

improvedBubbleSort(secondArr);

console.log(secondArr);


