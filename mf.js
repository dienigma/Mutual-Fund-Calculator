function calculateReturn() {
    const investmentAmount = document.getElementById("amount").value;
    const time = parseInt(document.getElementById("time").value);
    const annualRate = parseInt(document.getElementById("annualRate").value);
    const rate = annualRate/100;
    var returnAmount = Math.floor(investmentAmount * (1 + rate/time)**(time*time));
    document.getElementById('returnAmount').innerHTML = `<h4> Rs.${returnAmount} </h4>`
}


`                   `
