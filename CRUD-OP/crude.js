document.getElementById("btn").addEventListener("click", function () {
    let name = document.frm.name.value;
    let age = document.frm.age.value;
    let sal = document.frm.salary.value;
    let up = document.frm.update.value;
    let userDetail = {};
    let data = {
        name: name,
        age: age,
        salary: sal
    };

    let info = JSON.parse(localStorage.getItem("UserInfo"));
    if (info != null) {
        if (up != '') {
            for (let i = 0; i < info.studentInfo.length; i++) {
                if (up == i) {
                    info.studentInfo[i].name = name;
                    info.studentInfo[i].age = age;
                    info.studentInfo[i].salary = sal;
                }
            }
            localStorage.setItem("UserInfo", JSON.stringify(info));

        } else {
            info.studentInfo.push(data);
            localStorage.setItem("UserInfo", JSON.stringify(info));
        }


    } else {
        userDetail.studentInfo = [data];
        localStorage.setItem("UserInfo", JSON.stringify(userDetail));
    }

    document.frm.reset();
    document.frm.update.value='';
    display();
});

function display() {

    let dt = "<tr>";
    dt += "<td>Name</td>";
    dt += "<td>Age</td>";
    dt += "<td>Salary</td>";
    dt += "<td colspan='2'>Action</td>";
    dt += "</tr>";
    let info = localStorage.getItem("UserInfo");
    if (info != null) {
        let data = JSON.parse(info);
        for (let i = 0; i < data.studentInfo.length; i++) {
            dt += "<tr>";
            dt += "<td>" + data.studentInfo[i].name + "</td>";
            dt += "<td>" + data.studentInfo[i].age + "</td>";
            dt += "<td>" + data.studentInfo[i].salary + "</td>";
            dt += "<td> <input type='button' name='edit' id='edit' onclick='editdata(" + i + ")' value='Edit'></td>";
            dt += "<td> <input type='button' name='del' id='del' onclick='deldata(" + i + ")' value='Delete'></td>";
            dt += "</tr>";

        }
        document.getElementById("userData").innerHTML = dt;

    }

}
function deldata(id) {
    let info = localStorage.getItem("UserInfo");
    if (info != null) {
        let data = JSON.parse(info);
        console.log(data);
        data.studentInfo.splice(id, 1);
        localStorage.setItem("UserInfo", JSON.stringify(data));
        display();
    }
}

function editdata(id) {
    let info = localStorage.getItem("UserInfo");
    if (info != null) {
        let data = JSON.parse(info);
        for(let i=0;i<data.studentInfo.length;i++){
            if(id == i){
                document.frm.name.value=data.studentInfo[i].name;
                document.frm.age.value=data.studentInfo[i].age;
                document.frm.salary.value=data.studentInfo[i].salary;
                document.frm.update.value=i;
            }
        }
       
    }
}