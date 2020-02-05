function bottomUpExtended(price, rodLength){
    let memo=[rodLength]; //declaring the array to store the calculated result
    let combination=[]; //declaring the array to store the cut position of the maximum value
    let optimalChoice= []; //array to store each combination of the cuts as the result
    memo[0]=0; //assigning the first element to 0

    //nested loops to compare each element in the price list and store the result in the memo array
    for(let j=1; j<= rodLength; j++){
        maxRevenue=-1; //assuming the starting revenue is -1
        for(let i=1; i<=j; i++){
            if(maxRevenue< price[i] + memo[j-i]){ //compare if the value of the previous index in the array plus current index in price list is greater than current revenue
                maxRevenue = price[i] + memo[j-i]; //assigning it as the current maximum revenue
                combination[j] = i; //assign the cut in the index to the combination of cut position with maximum value
            }
        }
        memo[j] = maxRevenue; //storing the current maximum revenue in the memo array for later use
    } //repeat this step until reaches the rod length

    //storing the result of maximum revenue and the cuts position in an object, so it can be easily accessed later
    let result = {
        totalPrice: memo[rodLength],
        choices: optimalChoice 
    }

    //storing the cuts position with the maximum revenue into an array
    while(rodLength > 0){
        optimalChoice.push(combination[rodLength]); //push each result into an array, so it can be displayed to the user
        rodLength -= combination[rodLength] //decrement the index of the combination array which contains each cut position
    }

    console.log("Total Revenue:" + result.totalPrice + "\n" + "Cut(s):" + result.choices); //printing out the results on the console
    document.querySelector("#rev").textContent=result.totalPrice; //displaying the maximum revenue value
    document.querySelector("#cuts").textContent=result.choices; //displaying the cuts position

    return result; //returning the result object, which contains two properties of max revenue and cuts position
}




