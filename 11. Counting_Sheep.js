function countSheep(arr) {
    let sheepCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sheepCount++;
        }
    }
    return sheepCount;
}