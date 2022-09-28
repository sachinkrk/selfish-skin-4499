    let mainMenu = document.querySelector(".mainMenu");
    let closeMenu = document.querySelector(".closeMenu");
    let openMenu = document.querySelector(".openMenu");


    openMenu.addEventListener("click",show);
    closeMenu.addEventListener("click",close);

    function show(){
        mainMenu.style.display = "flex"
        mainMenu.style.top = "0"
    }
    function close(){
        mainMenu.style.top = "-100%"
    }