// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function multiples_5_3(){
    for (i=1;i<=numbers;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
    }
}
multiples_5_3();
// // 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function sum_multiples3_5(){
    var total=0;
    for(let c=0; c<1000; c++){
        if(c%3===0 && c%5===0){
            total+=c;
        
        }
    }
    console.log(total)
}
sum_multiples3_5();
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function evenOdd(){
    for(b=0;b<=20;b++){
        if(b%2==0){
            console.log(+" "+ "Is even")
        }
        else{
            console.log(+" "+ "is odd")
        }
    }
}
evenOdd()

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
function largest_of_5(){
    number=[-2,4,-5,6,0]
    let biggest=0
    for (let a=0; a<number.length; a++){
        if(largest<number[a]){
            largest=number[a]
        }
    }
    console.log(biggest)
}
largest_of_5();

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function largest_of_two() {
    if(10>40){
        console.log("10 is the largest number")
    }
    else{
        console.log("40 is the largest")
    }
}
largest_of_two();
// 6. Write a JavaScript program to find leap years from 2000 to 2022

function check_leap_Year(){
    for(let l=2000;l<=2022;l++ ){
        if (l%4===0||l%400===0){
            console.log(z+" "+ "is leap year")
        }
        else{
            console.log(z+" "+"is not a leap year")
        }
    }
}
check_leap_Year();