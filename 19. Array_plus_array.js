function addArrays(arr1, arr2) {
    
    if (arr1.length !== arr2.length) {
        return "Arrays must have the same length.";
    }
    
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
