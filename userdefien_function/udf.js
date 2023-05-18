//tack nothing return nothing
function add(){   //declair function
    let a =prompt("enter a");
    let b =prompt("enter b");
    c=parseInt(a)+parseInt(b);
    document.write("additin is :"+c+"<br>");
    mult(a,b);
    document.write('<br>substraction is :'+sub());
}

// add(); //call function

//tack nothing return something

function sub(){
    let a =prompt("enter a");
    let b =prompt("enter b");
    c=parseInt(a)-parseInt(b);
    return c;
}
// document.write('<br>substraction is :'+sub());


//tack something return nothing

function mult(a,b){
  
    c=parseInt(a)*parseInt(b);
    document.write("multiplication  is :"+c);
}


//tack somthing return something

function mult2(a,b){
  
    c=parseInt(a)*parseInt(b);
    return c;
}

document.write('substraction is :'+mult2(2,3));