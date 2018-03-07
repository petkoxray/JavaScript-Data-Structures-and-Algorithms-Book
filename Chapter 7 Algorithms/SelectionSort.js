function selectionSort(array) {
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < length; j++) {
            if (array[minIndex] > array[j])
                minIndex = j;
        }

        if (i !== minIndex) {
            let tmp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = tmp;
        }
    }

    return array;
}

let arr = [10, 20, 1, 5, -5, 12, 3];
console.log(arr);

let sortedArr = selectionSort(arr);
console.log(sortedArr);