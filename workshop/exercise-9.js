// Q9
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

for(let n=1;n<=100;n++){
    if(n%3==0 && n%5==0){
        console.log("Fizzbuzz");
    }else if(n%3==0){
        console.log("Fizz");
    }else if(n%5==0){
        console.log("buzz");
    }else{
        console.log(n);
    }
}
