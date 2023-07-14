let data = localStorage.getItem("catagory");
let cd = JSON.parse(data);
for (let i = 0; i < cd.arr.length; i++){
 document.getElementById('count').innerHTML=(cd.arr[i].id)
}

let p = JSON.parse(localStorage.getItem("productdetail"));
for (let i = 0; i < p.arr.length; i++){
 document.getElementById('p').innerHTML=(p.arr[i].id)
}


let n=localStorage.getItem("username");
document.getElementById('user').innerHTML = n;



document.getElementById('cate').addEventListener('click')