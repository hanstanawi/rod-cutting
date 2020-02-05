let price; //declaring variables to store the price list
let length; //declaring variables to store the Rod length list

//function start when the window loads
window.onload = function() {
    let fileInput = document.getElementById('fileInput'); //variable to store the input file
    let fileDisplayArea = document.getElementById('fileDisplayArea'); //variable to print out the input content

    //function starts when user have selected the text file
    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0];
        let textType = /text.*/; //value to check the compability of the text format

        //check the compability
        if (file.type.match(textType)) {
            let reader = new FileReader();

            //function when file has been loaded
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result; //display out the content
                let arr = reader.result.split('\n').map(function (row){
                    return row.split(' ')
                }); //Function to split the string in the document as an 2D array, by splitting the lines and spaces

                let col1 = arr.map(function(value,index){ 
                    return value[0]; }
                ); //Retrieving the first column from the 2D array

                let col2 = arr.map(function(value,index){ 
                    return value[1]; }
                ); //Retrieving the second column from the 2D array


        
                let rodLength=col1.filter(Boolean); //Checking whether the array has NaN, Null, or Undefined value
                let rodPrice=col2.filter(Boolean); //Checking whether the array has NaN, Null, or Undefined value

                for(let i=0; i<rodPrice.length; i++){ 
                    rodPrice[i] = parseInt(rodPrice[i], 10); 
                } //looping through the array and converting each item into integers
                
                for(let i=0; i<rodLength.length; i++){ 
                    rodLength[i] = parseInt(rodLength[i], 10); 
                } //looping through the array and converting each item into integers

                console.log("Rod Length: " + rodLength) //print out the length list into the console
                console.log("Price List: " + rodPrice) //print out the price list into the console
                
                rodPrice.unshift(0);
                
                price = rodPrice; //assigning the array into the price variable
                length = rodLength; //assigning the array into the length variable
                
            }

            reader.readAsText(file);	
        } else {
            fileDisplayArea.innerText = "File not supported!" //warn the user if the file is not compatible
        }
    });

     //event starts when the user click the "count the revenue" button
    document.querySelector("button").addEventListener("click", function(){
        let userLength = prompt("Enter the length of the rod"); //ask the user to input the rod length
        document.querySelector("#length").textContent = userLength; //display the value of the input rod length
        console.log("Rod Length: " + userLength); //printing out on the console
        let timeBegin = performance.now(); //start time execution
        bottomUpExtended(price, userLength); //execute the dynamic programming function
        let timeEnd = performance.now(); //end the time execution
        console.log("Time taken: " + (timeEnd - timeBegin) + " ms"); //count the time taken and print it out on the console
        document.querySelector("#time").textContent = timeEnd - timeBegin; //displaying the time taken
      });
}