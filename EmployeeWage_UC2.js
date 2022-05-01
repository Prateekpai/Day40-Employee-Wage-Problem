const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;

let emphrs=0;
let empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_PART_TIME:
        emphrs=PART_TIME_HOUR;
        break;    

    case IS_FULL_TIME:
        emphrs=FULL_TIME_HOUR
        break;
    default:
        emphrs= 0;
}

let empWage=emphrs*WAGE_PER_HOUR;
console.log(empWage);