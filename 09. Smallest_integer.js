function findSmallestInteger(arr) {
    
    if (arr.length === 0) {
        return undefined; 
    }
    
    let smallest = arr[0]; 
    
    
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return smallest; 
}