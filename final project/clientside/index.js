

function checkValidData() {
    let nm = document.userform.uname;
    let name = nm.value;

    if (name == '') {
        nm.focus();
        document.getElementById('errName').innerHTML = "Please enter name";
        document.getElementById('errName').style.color = "#e7b4b4";
        return false;
    } else {
        document.getElementById('errName').innerHTML = "";
    };

    if (name.length < 2 || name.length > 10) {
        nm.focus();
        document.getElementById('errName').innerHTML = "Name must be min 2 or max 10 char";
        document.getElementById('errName').style.color = "red";
        return false;
    } else {
        document.getElementById('errName').innerHTML = "";
    };

    let p = /^[A-Za-z]+$/;
    let a = p.test(name);
    if (a == false) {
        nm.focus();
        document.getElementById('errName').innerHTML = "Please enter only alphabets";
        document.getElementById('errName').style.color = "red";
        return false;
    } else {
        document.getElementById('errName').innerHTML = "";
    };



    let no = document.userform.no;
    let number = no.value;

    if (number == '') {
        no.focus();
        document.getElementById('errNo').innerHTML = "Please enter number";
        document.getElementById('errNo').style.color = "red";
        return false;
    }

    if (number.length < 7 || number.length > 14) {
        no.focus();
        document.getElementById('errNo').innerHTML = "Please enter valid number";
        document.getElementById('errNo').style.color = "red";
        return false;
    } else {
        document.getElementById('errNo').innerHTML = "";
    };


    let e = document.userform.email;
    let email = e.value;

    if (email == '') {
        e.focus();
        document.getElementById('errEmail').innerHTML = "Please enter Email";
        document.getElementById('errEmail').style.color = "red";
        return false;
    }

    let pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let b = pat.test(email);
    if (b == false) {
        e.focus();
        document.getElementById('errEmail').innerHTML = "Please enter valid Email";
        document.getElementById('errEmail').style.color = "red";
        return false;
    } else {
        document.getElementById('errEmail').innerHTML = "";
    };

    let ps = document.userform.pwd;
    let pas = ps.value;

    if (pas == '') {
        ps.focus();
        document.getElementById('errPwd').innerHTML = "Please enter password";
        document.getElementById('errPwd').style.color = "red";
        return false;
    }

    let p2 = /^[a-zA-Z!@#$%^&*0-9]{6,16}$/;
    let pas2 = p2.test(pas);

    if (pas2 == false) {
        ps.focus();
        document.getElementById('errPwd').innerHTML = "Please enter strong password";
        document.getElementById('errPwd').style.color = "red";
        return false;
    } else {
        document.getElementById('errPwd').innerHTML = "";
    };

    let cp = document.userform.cpwd;
    let cpp = cp.value;

    if (cpp == '') {
        cp.focus();
        document.getElementById('errCPwd').innerHTML = "Please enter password";
        document.getElementById('errCPwd').style.color = "red";
        return false;
    }
    if (pas !== cpp) {
        cp.focus();
        document.getElementById('errCPwd').innerHTML = "password not same";
        document.getElementById('errCPwd').style.color = "red";
        return false;
    } else {
        document.getElementById('errCPwd').innerHTML = "";
    };

    let da = document.userform.date;
    let dat = da.value;

    if (dat == '') {
        da.focus();
        document.getElementById('errdate').innerHTML = "Please enter date";
        document.getElementById('errdate').style.color = "red";
        return false;
    } else {
        document.getElementById('errdate').innerHTML = "";
    };

    let g = document.querySelectorAll("input[type='radio']:checked");
    if (g.length < 1) {
        document.getElementById('errgen').innerHTML = "Please enter gender";
        document.getElementById('errgen').style.color = "red";
        return false;
    } else {
        document.getElementById('errgen').innerHTML = "";
    };

    let h = document.querySelectorAll("input[type='checkbox']:checked");
    if (h.length < 1) {
        document.getElementById('errhoby').innerHTML = "Please enter Hobby";
        document.getElementById('errhoby').style.color = "red";
        return false;
    } else {
        document.getElementById('errhoby').innerHTML = "";
    };

    document.userform.reset;
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);
    localStorage.setItem("userpsw", pas);
    return true;
}



function check() {
    let pas = document.lform.ps;
    let p2 = pas.value;
    let nm = document.lform.em;
    let name = nm.value
    let d2 = localStorage.getItem('useremail');
    let d3 = localStorage.getItem('userpsw');

    console.log(d2);
    console.log(d3);

    if (name !== d2) {
        nm.focus();
        document.getElementById('errem').innerHTML = "email not resister";
        document.getElementById('errem').style.color = "red";
        return false;

    }

    if (p2 != d3) {
        pas.focus();
        document.getElementById('errps').innerHTML = "wrong password";
        document.getElementById('errps').style.color = "red";
        return false;
    }

    window.location.href = "index.html";

}

// get ctagory in menu

let data = localStorage.getItem("catagory");
let cd = JSON.parse(data);
let li = '';
li += `<a href="index.html" class='col text-decoration-none fs-3 '>All Category</a>`;
for (let i = 0; i < cd.arr.length; i++) {
    li += "<a href='#' class='col text-decoration-none fs-3' onclick='product(" + cd.arr[i].id + ")'>";
    li += cd.arr[i].catagory;
    li += "</a>";

}
document.getElementById('cat').innerHTML = li;

document.getElementById('cat').innerHTML += `<div class="search col-3 flex align-items-center">
   <input class="px-2 py-2 rounded-5" type="search" placeholder="search" />
   <i class="fa-solid fa-magnifying-glass text-light fs-4"></i>
</div>`;



// get all prodact 
let pdata = JSON.parse(localStorage.getItem("productdetail"));

let row = '';
for (let j = 0; j < pdata.arr.length; j++) {


    row += `<div class="col-3" >
                            <div class="card border-0">
                                <img src="${pdata.arr[j].image}" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold fs-3">${pdata.arr[j].name}</h5>
                                    <p class="card-text text-success fs-4 fw-bold">$ ${pdata.arr[j].price}</p>
                                    <a href="#" class="btn btn-warning fw-bold" onclick='addc(${pdata.arr[j].id})'>Add To cart</a>
                                </div>
                            </div>
                    </div>`
}



document.getElementById('bharat').innerHTML = row;



// get category wise product 

function product(id) {
    let pdata = JSON.parse(localStorage.getItem("productdetail"));

    let row = '';

    for (let j = 0; j < pdata.arr.length; j++) {
        if (id == pdata.arr[j].catname) {

            row += `<div class="col-3" >
                                <div class="card border-0">
                                    <img src="${pdata.arr[j].image}" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold fs-3">${pdata.arr[j].name}</h5>
                                        <p class="card-text text-success fs-4 fw-bold">$ ${pdata.arr[j].price}</p>
                                        <a href="#" class="btn btn-warning fw-bold")'>Add To cart</a>
                                    </div>
                                </div>
                        </div>`
        }


    }
    document.getElementById('bharat').innerHTML = row;

    let dn = document.getElementsByClassName('r1');
    for (let i = 0; i < dn.length; i++) {
        dn[i].innerHTML = '';
    }
}




function addc(id) {
console.log(id);
    let pdata = JSON.parse(localStorage.getItem("productdetail"));
    let q =1;
    
    for (let j = 0; j < pdata.arr.length; j++) {
        let no =pdata.arr[j].id;
        let cid = pdata.arr[j].catname;
        if (id == no ) {


            let obj = {
                id :1,
                acname: pdata.arr[j].name,
                acimg: pdata.arr[j].image,
                acprice: pdata.arr[j].price,
                acdis: "20%",
                qantity : q,
                catid : cid
            }

            let obj2 = {};


            let acdata = JSON.parse(localStorage.getItem("addtocart"));
            if (acdata != null) {
                if(pdata.arr[i].catname == acdata.arr[i].)
                let len = acdata.arr.length;
               
                let obj = {
                    id :len+1,
                    acname: pdata.arr[j].name,
                    acimg: pdata.arr[j].image,
                    acprice: pdata.arr[j].price,
                    acdis: "20%",
                    qantity : pdata.arr[j].catname,
                }
            
                acdata.arr.push(obj);
                localStorage.setItem("addtocart", JSON.stringify(acdata));

            } else {
                obj2.arr = [obj];
                localStorage.setItem("addtocart", JSON.stringify(obj2));
            }



        }

    }
}


