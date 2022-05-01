const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;
let Max_HRS_IN_MONTH=160;
let NUM_OF_WORKING_DAYS=20;
let totalWorkingHrs=0;
let totalWorkingDays=0;
let emphrs=0

function getWorkingHours(empCheck){
    switch(empCheck)
    {
        case IS_PART_TIME:
            return    PART_TIME_HOUR;
     
         case IS_FULL_TIME:
             return FULL_TIME_HOUR

         default:
             return 0;
    }
}

while(totalWorkingDays<NUM_OF_WORKING_DAYS && totalWorkingHrs<=Max_HRS_IN_MONTH)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHrs+=getWorkingHours(empCheck)
}
let empWage=totalWorkingHrs*WAGE_PER_HOUR;
console.log("Total Working Days:"+totalWorkingDays+"........"+"Total Hours: "+totalWorkingHrs+".........."+"EmpWage:"+ empWage);