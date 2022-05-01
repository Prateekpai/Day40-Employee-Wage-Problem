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

let totalEmpWage = 0;

function sum(dailyWage){
    totalEmpWage +=dailyWage

}
empDailyWageArr.forEach(sum);
console.log("Total Days:"+ totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Employee Wage:"+totalEmpWage);

function totalWages(totalWages, dailyWage){
    return totalEmpWage+dailyWage;
}
console.log("Employee Wage with Reduce:"+empDailyWageArr.reduce(totalWages,0));

let dailyCntr=0;

function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + "="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First Time Fulltime Wage was earned on Day:"+mapDayWithWageArr.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");

}
console.log("Check All element have Full time Wage:"+fullDayWageArr.every(isAllFulltimeWage));

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");

}
console.log("Check Any Part Time Wage:"+mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDayWorked(numofDays, dailyWage){
    if(dailyWage>0) return numofDays+1;
    return numofDays;
}
console.log("Number of Days Employee Worked:"+empDailyWageArr.reduce(totalDayWorked,0));