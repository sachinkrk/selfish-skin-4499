let show = document.querySelector("#addAcc")
    show.addEventListener("click",showform);

    function showform(){
        let form = document.querySelector(".hide");
        form.style.visibility = "visible";
        show.style.visibility = "hidden";

    }

    let detailObj = JSON.parse(localStorage.getItem("Mailtrap"));

    function check(){
        let obj_email = detailObj.email;
        let obj_password = detailObj.password;
        //console.log(obj_email,obj_password);

        let Email = document.querySelector("#eml").value;
        let Password = document.querySelector("#pass").value;

        if(Email === "" || Password === ""){
            alert("Please fill all the details")
        }
        else if (Email === obj_email || Password === obj_password){
            alert("login successfully");
        }
        else{
            alert("Please fill correct details")
        }

    }