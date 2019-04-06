function cal(){

    var a=parseInt(document.getElementById('Inv').value)
    var b=parseInt(document.getElementById('Ret').value)
    var c=parseInt(document.getElementById('dur').value)
    
    mat= a*b/100*c+a
    interest=a*b/100*c
    document.getElementById('tt').innerHTML=`<b> ${mat} INR</b>`
    document.getElementById('ii').innerHTML=`<b> ${interest} INR</b>`
    
    }