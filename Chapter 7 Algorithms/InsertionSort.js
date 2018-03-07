function insertionSort(array) {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let temp = array[i];
        let j = i;

        while(j > 0 && array[j - 1] > temp ) {
            array[j] = array[j-1];
            j--;
        }

        array[j] = temp;
    }

    return array;
}

let arr = [10, 20, 1, 5, -5, 12, 3];
console.log(arr);

let sortedArr = insertionSort(arr);
console.log(sortedArr);