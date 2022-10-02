    let login = document.querySelector("#log_in")
    login.addEventListener("click",myfunction);

    let count = 0
    let obj = {};
    function myfunction(){
        count++;
        if(count==0 || count%2===1){
            obj.email = document.querySelector("#Email").value;
            change = document.querySelector('#Email');
            change.value = "";
            change.type = "password";
            change.placeholder = "Enter your password"
            //console.log(obj);
        }
        else if(count>0 && count%2===0){
            obj.password = document.querySelector("#Email").value;
            change = document.querySelector('#Email');
            change.value = "";
            change.type = "email";
            change.placeholder = "Enter your Email";
            //console.log(obj);
        }

        if(count%2===0 && obj.email!="" && obj.password!=""){
            console.log(obj);
            localStorage.setItem("Mailtrap",JSON.stringify(obj))
            alert("Login successfully Go for Sign up");
        }
    }