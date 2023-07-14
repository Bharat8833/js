
// start display product to cart

dispaly();

function dispaly() {
    let acdata = JSON.parse(localStorage.getItem("addtocart"));



    let dt = "<tr>";
    dt += "<th align='center'>ID</th>";
    dt += "<th align='center'>produvt image</th>";
    dt += "<th align='center'>product name</th>";
    dt += "<th align='center'>price($)</th>";
    dt += "<th align='center'>discount</th>";
    dt += "<th align='center'>Qantity</th>";
    dt += "<th colspan='2' align='center'>Action</th>";
    dt += "</tr>";

    document.getElementById("cart").innerHTML = dt;
    for (let i = 0; i < acdata.cart.length; i++) {
        if (acdata != null) {
            dt += "<tr>";
            dt += "<td>" + acdata.cart[i].id + "</td>";
            dt += "<td> <img src='" + acdata.cart[i].acimg + "' hight='100px' width='200px'></td>";
            dt += "<td>" + acdata.cart[i].acname + "</td>";
            dt += "<td>" + acdata.cart[i].acprice + "</td>";
            dt += "<td>" + acdata.cart[i].acdis + "</td>";
            dt += "<td>" + acdata.cart[i].qantity + "</td>";

            dt += "<td> <input type='button' name='del' id='del' onclick='deldata(" + acdata.cart[i].id + ")' value='Delete'></td>";
            dt += "</tr>";
        }
    }
    dt += "<tr>";
    dt += "<td colspan='3'>TOTAL</td>";
    dt += "<td colspan='4'>$ " + eqal() + "</td>";
    dt += "</tr>";
    document.getElementById("cart").innerHTML = dt;
}

// end display product to cart


// start remove product to cart

function deldata(id) {
    let data = localStorage.getItem("addtocart");
    let cd = JSON.parse(data);
  


    if (cd != null && cd.cart.length > 0) {
        obj = cd.cart.find((res) => {
            return res.qantity ;
        });
 
       console.log(obj.qantity);
        if ( obj.qantity > 1) {
            obj.qantity -= 1;
            cd = obj;
        //  return false;
        } else {

           
            id1 = id - 1;
            cd.cart.splice(id1, 1);

            let a = 1;
            for (let i = 0; i < cd.cart.length; i++) {
                cd.cart[i].id = a;
                a++;

            }
        } 
        localStorage.setItem("addtocart", JSON.stringify(cd));
    }
    dispaly();
}

// end remove product to cart


// start calculat total of product price in cart

function eqal() {
    let data = JSON.parse(localStorage.getItem("addtocart"));

    let sum = data.cart.map((o) => o.acprice)
    let t = sum.reduce((a, c) => { return (parseInt(a) + parseInt(c)); });

    return t;
}

// end calculat total of product price in cart

