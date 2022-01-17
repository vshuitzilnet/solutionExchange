

//For run this project use: npm start
array = ['Luis', 'Carlos', 'Gustavo', 'Fernando', 'Victor', 'Javier'];
__array = ['Luis', 'Carlos', 'Gustavo', 'Fernando', 'Victor', 'Javier'];


while(array.length > 1){ //we need to verify when into the array exist just one of the options
    //Not is necesary create the variables for the random number but was more easy for me call just the name of the variables
    //The next numbers are for call a random position into the arrays 
    let firstPerson = Math.floor((Math.random() * (array.length )) + 0);
    let secondPerson = Math.floor((Math.random() * (__array.length)) + 0);
    //This IF is for validate that the values of the randoms positions not are equal
    if(array[firstPerson] != __array[secondPerson]){
        console.log(array[firstPerson] + ' - ' + __array[secondPerson]); //Print the couple maked with the random numbers selected previously 
        array.splice(firstPerson, 1); //Use splice for delete in the arrays the current convination
        __array.splice(secondPerson, 1);
    }
}
console.log(array[0] + ' - ' + __array[0]);
