function display (sum){
    console.log(sum)
}
function sumNumber (num1,num2,display){
    let asin = num1+num2
    display(asin)
}
sumNumber(99,101,display)


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.pop()
let dayweek = [...days,"sun"]
console.log(dayweek)