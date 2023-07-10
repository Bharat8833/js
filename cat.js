

display();

document.getElementById("btn").addEventListener("click", () => {
    let cat = document.catf.cn.value;
    let up=document.catf.up.value;

    let obj = {
        id: 1,
        catagory: cat,
    };

    let obj2 = {};

    let data = localStorage.getItem("catagory");
    let cd = JSON.parse(data);
    
    if (cat != '') {

        if (cd != null) {

            if (up != '') {
                for (let i = 0; i < cd.arr.length; i++) {
                    if (up == cd.arr[i].id) {
                        cd.arr[i].catagory = cat;
                      }
                }
                localStorage.setItem("catagory", JSON.stringify(cd));
    
            } else {
                let len = cd.arr.length;
                obj2 = {
                    id: len + 1,
                    catagory: cat
                }
                cd.arr.push(obj2);
    
                obj2 = cd;
                localStorage.setItem("catagory", JSON.stringify(obj2));
            }
            

        } else {
            obj2.arr = [obj]
            localStorage.setItem("catagory", JSON.stringify(obj2));
        }

        
    }
    document.catf.reset()

    display();

});


function display() {


    let dt = "<tr >";
    dt += "<td align='center'>ID</td>";
    dt += "<td align='center'>CATAGORY</td>";
    dt += "<td colspan='2' align='center'>Action</td>";
    dt += "</tr>";

    let data = localStorage.getItem("catagory");

    if (data != null) {
        let cd = JSON.parse(data);

        for (let i = 0; i < cd.arr.length; i++) {

            dt += "<tr>";
            dt += "<td>" + cd.arr[i].id + "</td>";
            dt += "<td>" + cd.arr[i].catagory + "</td>";
            dt += "<td> <input type='button' name='edit' id='edit' onclick='editdata(" +cd.arr[i].id+ ")' value='Edit'></td>";
            dt += "<td> <input type='button' name='del' id='del' onclick='deldata(" + cd.arr[i].id + ")' value='Delete'></td>";
            dt += "</tr>";
        }
        document.getElementById("userData").innerHTML = dt;
    }

}

function deldata(id) {
    let data = localStorage.getItem("catagory");
    let cd = JSON.parse(data);
    if (cd != null && cd.arr.length>0) {
         id1=id-1;
        cd.arr.splice(id1, 1);
  
        let a=1;
        for(let i=0;i<cd.arr.length;i++){
            cd.arr[i].id=a;
            a++
        }
                
        localStorage.setItem("catagory", JSON.stringify(cd));
        display();
    }
}

function editdata(id) {
    let data = localStorage.getItem("catagory");
    if (data != null) {
        let cd = JSON.parse(data);
        for (let i = 0; i < cd.arr.length; i++) {
            if (id == cd.arr[i].id) {
                document.catf.cn.value = cd.arr[i].catagory;
                document.catf.up.value = cd.arr[i].id;
            }
        }
    }
}


