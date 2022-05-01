const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;
let Max_HRS_IN_MONTH=160;
let NUM_OF_WORKING_DAYS=20;
let empHrs=0

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

function calDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
    ;
}

let totalEmpHrs =0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= Max_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));

}

let empWage = calDailyWage(totalEmpHrs);
console.log("Total Days:"+ totalWorkingDays+ "......"+"Total Hrs:"+totalEmpHrs+ "........"+"Employee Wage:"+ empWage);