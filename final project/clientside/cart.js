dispaly();

function dispaly() {
    let acdata = JSON.parse(localStorage.getItem("addtocart"));
    let data = JSON.parse(localStorage.getItem("productdetail"));
   

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
    for (let i = 0; i < acdata.arr.length; i++) {
        if (acdata != null) {
            dt += "<tr>";
            dt += "<td>" + acdata.arr[i].id + "</td>";
            dt += "<td> <img src='" + acdata.arr[i].acimg + "' hight='100px' width='200px'></td>";
            dt += "<td>" + acdata.arr[i].acname + "</td>";
            dt += "<td>" + acdata.arr[i].acprice + "</td>";
            dt += "<td>" + acdata.arr[i].acdis + "</td>";
            dt += "<td>" + acdata.arr[i].qantity+ "</td>";
            dt += "<td> <input type='button' name='del' id='del' onclick='deldata(" + acdata.arr[i].id + ")' value='Delete'></td>";
            dt += "</tr>";
        }
    }
    dt += "<tr>";
    dt += "<td colspan='3'>TOTAL</td>";
    dt += "<td colspan='4'>" + eqal() + "</td>";
    dt += "</tr>";
    document.getElementById("cart").innerHTML = dt;
}

function deldata(id) {
    let data = localStorage.getItem("addtocart");
    let cd = JSON.parse(data);
    if (cd != null && cd.arr.length > 0) {
        id1 = id - 1;
        cd.arr.splice(id1, 1);

        let a = 1;
        for (let i = 0; i < cd.arr.length; i++) {
            cd.arr[i].id = a;
            a++;
        }

        localStorage.setItem("addtocart", JSON.stringify(cd));
    }
}

function eqal() {
    let data = JSON.parse(localStorage.getItem("addtocart"));

    let sum = data.arr.map((o) => o.acprice)
    let t = sum.reduce((a, c) => { return (parseInt(a) + parseInt(c)); });

    return t;
}



