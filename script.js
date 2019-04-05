function cal(){

    var a=parseInt(document.getElementById('Inv').value)
    var b=parseInt(document.getElementById('Ret').value)
    var c=parseInt(document.getElementById('dur').value)
    
    mat= a*b/100*c+a
    console.log(mat)
    return mat;
    }