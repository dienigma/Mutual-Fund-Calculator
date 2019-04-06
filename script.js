function cal(){

    var a=parseFloat(document.getElementById('Inv').value)
    var b=parseFloat(document.getElementById('Ret').value)
    var c=parseFloat(document.getElementById('dur').value)
    
    total= a*b/100*c+a
    interest=a*b/100*c
    document.getElementById('tt').innerHTML=`<b> ${total} INR</b>`
    document.getElementById('ii').innerHTML=`<b> ${interest} INR</b>`
    
    }