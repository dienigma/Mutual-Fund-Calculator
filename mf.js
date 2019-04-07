
function values(){
const investmentAmount = document.getElementById("amount").value;
console.log(investmentAmount);
const time = parseInt(document.getElementById("time").value);
console.log(time);
const annualRate = parseInt(document.getElementById("annualRate").value)
const rate = annualRate/100;
 console.log(rate)
}

function calculateReturn() {
    values();
    var returnAmount = investmentAmount * (1 + rate/time)^time*time
    console.log(returnAmount)
    document.getElementById('returnAmount').innerHTML = `<b> Rs.${returnAmount} </b>`
}


`                   `
