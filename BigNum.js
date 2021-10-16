var array = [3, 4, 5, 267, 21, 9];
var largest = 0;

    for (i=0; i<array.length; i++) {
    if (array[i]>largest) {
        largest = array[i];
    }
}
console.log(largest);
