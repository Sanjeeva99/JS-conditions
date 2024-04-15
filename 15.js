//for checking multiple conditions
let buyCar = false;
let buyCar2 = false;
let buyCar3 = true;
let buyCar4 = false;


if(buyCar){
    let car = 'Yes, only TATA car i can buy, bcoz the built quality is awesome';
    console.log(car); 
} else if(buyCar4){
    console.log('Mahindra also prefer a good built quality in cars');
} else if(buyCar3){
    console.log('If we have more budget, then go for Volvo Cars');
}else{
    let buyCar2 = 'We can buy a hyundai, bcoz so many features offering same price of TATA';
    console.log(buyCar2);
}


//for checking 2 conditions
let cycle = true;
let bike = false;

if(bike){
    let goARide = "We have less time to reach destiny";
    console.log(goARide);
} else{
    let cycle = 'No problme we can go through cycle its environment free';
    console.log(cycle);    
}

//conditions
let age = 21;
let DrivingLicense = 18; 
let checkEligibility = age >= DrivingLicense   //checkin true or false
console.log(checkEligibility);

if(checkEligibility){
    console.log('You r eligible');
} else{
    console.log('You r not eligible');
}


let examAge = 21;
let candidateAge = 18;
let checkeligible = examAge <= candidateAge
console.log(checkeligible);


//comparisions
let price = 100000;
let price2 = 100001;
let comparisions = price < price2; //lessthan
let checkEqual = price <= price2; //lessthan or equal to
let checkEqual2 = price2 = price; //equal
let checkEqual3 = price >= price2; //greaterthan or equals to
let checkEqual4 = price > price2; //greatertan
console.log(comparisions);
console.log(checkEqual);
console.log(checkEqual2);
console.log(checkEqual3);   
console.log(checkEqual4);

//equals
let num = '256'; //string
let num2 = 256; //number
let sumNum = (num == num2); //loose comparisoon 
let sumNum2 = (num === num2); //strict comparisoon
console.log(sumNum);
console.log(sumNum2);

//not equals
let Num = 9876;
let Num2 = 9867;
let equalNum = Num !== Num2
let equalNum2 = Num === Num2
console.log(equalNum);
console.log(equalNum2);



//logical operators
//&& AND
let player1 = true;
let player2 = true;
let plays = player1 && player2;
console.log( 'Lets play together', plays);

let player3 = false;
let player4 = true;
let plays2 = player3 && player4;
console.log( 'Lets play together2', plays2);

//|| OR
let playGame = player1 || player2;
console.log('Start playing',playGame );

let playGame2 = player3 || player4;
console.log('Start playing',playGame2 )

//! Not 
let writingCode = true;
console.log(writingCode);

let writingCode2 = true;
console.log(!writingCode2);


let marriageAgeForBoys21 = true;
console.log(marriageAgeForBoys21);

let SscEligible21 = false;
console.log(!SscEligible21);
