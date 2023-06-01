let text='';

function appendkey(digit){
    text += digit;
    document.getElementById('screen').value = text;
}

function equal(){
    var b=document.getElementById('screen').value;
    b=b.replace(/x/g,"*");
    var c=eval(b);
    document.getElementById('screen').value =c;
}