let arr = [5, 10, 20];

function sum(array, index) {
    if (index === array.length - 1)
        return arr[index];
    else
        return arr[index] + sum(array, ++index);
}

let result = sum(arr, 0);

console.log(result);