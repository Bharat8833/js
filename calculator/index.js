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

function clearall(){
    text='';
    document.getElementById('screen').value =text;
}

function backspace(){
   var d=  document.getElementById('screen').value ;
   var f= d.slice(0,-1);
   text=f;
   document.getElementById('screen').value =text;
}