function calculateAverage(arr) {
    
    if (arr.length === 0) {
        return undefined; 
    }
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    
    let average = sum / arr.length;
    
    return average;
}