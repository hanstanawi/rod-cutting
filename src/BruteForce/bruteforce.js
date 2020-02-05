function bruteForce(price, rodLength){
    
    if (rodLength == 0){
        return 0;
    } //the base case of the recursion, where the recursion ends when the length reaches 0

    let maxRevenue = -1; //assuming the current revenue to -1
    //looping to compare each length in the list
    for(let i=1; i<= rodLength; i++){
        maxRevenue = Math.max(maxRevenue, price[i]+bruteForce(price, rodLength-i)) //taking the maximum value after the comparison between the current maxRevenue and recursive call o the item before it.
    }
    
    return maxRevenue; //returning the maximum value
}


