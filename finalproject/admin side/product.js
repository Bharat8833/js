

// start display catagory in menu


let lid = JSON.parse(localStorage.getItem('catagory'));

if (lid != null) {
    row = '';
    row += '<option>------select option---</option>'

    for (let i = 0; i < lid.arr.length; i++) {
        row += "<option value='" + lid.arr[i].id + "'>" + lid.arr[i].catagory + "</option>";
    }
    document.getElementById('pid').innerHTML = row;
};


// end display catagory in menu


// start set product detail in localstorage

document.getElementById("pimg").addEventListener("change", () => {
    let pimg = document.getElementById('pimg');

    if (pimg.files && pimg.files[0]) {
        let im = new FileReader();
        im.readAsDataURL(pimg.files[0]);
        im.addEventListener('load', () => {
            localStorage.setItem("pImage", JSON.stringify(im.result));
            document.pfrm.pimgpath.value = im.result;
        })
    }
});



display();
document.getElementById('btn').addEventListener('click', () => {
    let pn = document.pfrm.pn.value;
    let pd = document.pfrm.pd.value;
    let ppr = document.pfrm.ppr.value;
    let ud = document.pfrm.uid.value;
    let catn = document.getElementById('pid').value;

    let path = document.pfrm.pimgpath.value;

    let pobj = {
        id: 1,
        catname: catn,
        name: pn,
        detail: pd,
        price: ppr,
        image: JSON.parse(localStorage.getItem("pImage"))
    }



    let obj2 = {};

    let data = localStorage.getItem("productdetail");
    let pi = JSON.parse(data);



    if (pn != '') {
        if (pi != null) {

            if (ud != '') {
                for (let i = 0; i < pi.arr.length; i++) {
                    if (ud == pi.arr[i].id) {
                        pi.arr[i].catname = catn;
                        pi.arr[i].name = pn;
                        pi.arr[i].detail = pd;
                        pi.arr[i].price = ppr;
                        if (path != '') {
                            pi.arr[i].image = path;
                        } else {
                            pi.arr[i].image = JSON.parse(localStorage.getItem("pImage"));

                        }
                    }
                }
                localStorage.setItem("productdetail", JSON.stringify(pi));
                document.getElementById("uid").value = '';
                localStorage.removeItem("pImage");


            } else {


                let len = pi.arr.length;
                pobj = {
                    id: len + 1,
                    catname: catn,
                    name: pn,
                    detail: pd,
                    price: ppr,
                    image: JSON.parse(localStorage.getItem("pImage")),
                }
                pi.arr.push(pobj);
                obj2 = pi;
                localStorage.setItem("productdetail", JSON.stringify(obj2));
                localStorage.removeItem("pImage");

            }


        } else {
            obj2.arr = [pobj];
            localStorage.setItem("productdetail", JSON.stringify(obj2));
            localStorage.removeItem("pImage");
        }

        document.pfrm.reset();
        display();

    }

});


// end set product detail in localstorage



// start dispaly product detail in localstorage

function display() {


    let dt = "<tr>";
    dt += "<td align='center'>ID</td>";
    dt += "<td align='center'>cat name</td>";
    dt += "<td align='center'>product name</td>";
    dt += "<td align='center'>detail</td>";
    dt += "<td align='center'>price</td>";
    dt += "<td align='center'>img</td>";
    dt += "<td colspan='2' align='center'>Action</td>";
    dt += "</tr>";
    let cid = JSON.parse(localStorage.getItem('catagory'));
    let data = localStorage.getItem("productdetail");
    if (data != null) {
        let cd = JSON.parse(data);

        for (let i = 0; i < cd.arr.length; i++) {

            dt += "<tr>";
            dt += "<td>" + cd.arr[i].id + "</td>";
            for (let j = 0; j < cid.arr.length; j++) {
                if (cid.arr[j].id == cd.arr[i].catname) {
                    dt += "<td>" + cid.arr[j].catagory + "</td>";
                }
            };
            dt += "<td>" + cd.arr[i].name + "</td>";
            dt += "<td>" + cd.arr[i].detail + "</td>";
            dt += "<td>" + cd.arr[i].price + "</td>";
            dt += "<td> <img src='" + cd.arr[i].image + "' hight='100px' width='200px'></td>";
            dt += "<td> <input type='button' name='edit' id='edit' onclick='editdata(" + cd.arr[i].id + ")' value='Edit'></td>";
            dt += "<td> <input type='button' name='del' id='del' onclick='deldata(" + cd.arr[i].id + ")' value='Delete'></td>";
            dt += "</tr>";
        }
        document.getElementById("pdata").innerHTML = dt;
    }

}


// end dispaly product detail in localstorage


// start delet product detail in localstorage

function deldata(id) {
    let data = localStorage.getItem("productdetail");
    let cd = JSON.parse(data);
    if (cd != null && cd.arr.length > 0) {
        id1 = id - 1;
        cd.arr.splice(id1, 1);

        let a = 1;
        for (let i = 0; i < cd.arr.length; i++) {
            cd.arr[i].id = a;
            a++
        }

        localStorage.setItem("productdetail", JSON.stringify(cd));
        display();
    }
}

// end delet product detail in localstorage


// start edit product detail in localstorage

function editdata(id) {

    let data = localStorage.getItem("productdetail");
    let pi = JSON.parse(data);
    for (let i = 0; i < pi.arr.length; i++) {
        if (id == pi.arr[i].id) {
            document.pfrm.pid.value = pi.arr[i].catname;
            document.pfrm.pn.value = pi.arr[i].name;
            document.pfrm.pd.value = pi.arr[i].detail;
            document.pfrm.ppr.value = pi.arr[i].price;
            document.pfrm.pimgpath.value = pi.arr[i].image;
            document.pfrm.uid.value = pi.arr[i].id;

        }
    }
}

// end edit product detail in localstorage