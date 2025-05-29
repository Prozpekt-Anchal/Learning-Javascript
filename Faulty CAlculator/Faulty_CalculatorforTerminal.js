const readline = require ('readline');
const userInput = readline.createInterface(
    {
        input: process.stdin,
        output:process.stdout,
    }
);
userInput.question('Enter the first Number: ', (num1) => {
    userInput.question('Enter the Second Number: ', (num2) => {
        userInput.question('Which operation U want to perform:',(operation) =>{
            num1 = Number(num1);
            num2 = Number(num2);
            let result;
            let a = Math.random();
            if(a<0.1){
                if(operation == '+'){
                    result = num1 - num2;
                }
                else if(operation == '*'){
                    result = num1 + num2;
                }
                else if(operation == '-'){
                    result = num1 / num2;
                }
                else if(operation == '/'){
                    result = num1 ** num2;
                }
            }
            else{
                if(operation == '+'){
                    result = num1 + num2;
                }
                else if(operation == '*'){
                    result = num1 * num2;
                }
                else if(operation == '-'){
                    result = num1 - num2;
                }
                else if(operation == '/'){
                    result = num1 / num2;
                }
            }
            console.log(`Result: ${result}`);
            userInput.close(); 
        });                                 
    } );
} );
    
