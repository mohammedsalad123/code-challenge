let pay,nhif,nssf;
let totalTax ;
let grossalary=10000// based on grossSalary
let netSalary ;



    if(grossalary<=24000){ //your pay can be calaculated based on grossalary
        pay = grossalary*0.10
    }else if (grossalary>=24001 && grossalary<=32333){
        pay = grossalary*0.25
    }else if (grossalary>=32334 && grossalary<=500000){
        pay = grossalary*0.30
    }else if (grossalary>=500001 && grossalary<=800000){
        pay = grossalary*0.325
    }else if (grossalary>800000){
        pay = grossalary*0.35
    }
    

    

    if (grossalary<=5999){ //based on your grossalary your nhif ddeduction can calculated
        nhif =  150
    }else if (grossalary>=6000 && grossalary<=7999){
        nhif = 300
    }else if (grossalary>=8000 && grossalary<=11999){
        nhif = 400
    }else if (grossalary>=12000 && grossalary<=14999){
        nhif = 500
    }else if (grossalary>=15000 && grossalary<=19999){
        nhif = 600
    }else if (grossalary>=20000 && grossalary<=24999){
        nhif = 750
    }else if (grossalary>=25000 && grossalary<=29999){
        nhif = 850
    }else if (grossalary>=30000 && grossalary<=34999){
        nhif = 900
    }else if (grossalary>=35000 && grossalary<=39999){
        nhif = 950
    }else if (grossalary>=40000 && grossalary<=44999){
        nhif = 1000
    }else if (grossalary>=45000 && grossalary<=49999){
        nhif =1100
    }else if (grossalary>=50000 && grossalary<=59999){
        nhif = 1200
    }else if (grossalary>=60000 && grossalary<=69999){
        nhif = 1300
    }else if (grossalary>=70000 && grossalary<=79999){
        nhif = 1400
    }else if (grossalary>=80000 && grossalary<=89999){
        nhif = grossalary-1500
    }else if (grossalary>=90000 && grossalary<=99999){
        nhif = 1600
    }else if (grossalary>=100000){
        nhif = 1700
    }
    


  ;

nssf=grossalary*0.06 // lastely your nssf is also calculated based on grossalary




totalTax=pay+nssf+nhif // totaltax is calculated by adding the pay,nssf,nhif
console.log(totalTax) // it will generate your totaltax

netSalary=grossalary-totalTax //netsalary is given by grossalary-totaltax
console.log(netSalary)//it will generate your net salary

