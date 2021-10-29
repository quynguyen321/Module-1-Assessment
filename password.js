
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome the user to the password validator tool`)


reader.question("please enter the password?", function(password){
 
//console.log(typeof password, password)
 const passwordLength = password.length;
//console.log(passwordLength)

if(passwordLength >= 10 ){
  console.log(`success`)
}else{
  console.log('Big oof')
}



    // This line closes the connection to the command line interface.
    reader.close()

});