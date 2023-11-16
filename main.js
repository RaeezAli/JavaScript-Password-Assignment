function showPassword() {

    let password = document.getElementById("showPassword");
    let showHide = document.getElementById("showHide");
    

    if(password.type === "password"){

        password.type = "text";
        showHide.src = "eye-open.png";
    }

    else {
        
        password.type = "password";
        showHide.src = "eye-close.png";

    }
}