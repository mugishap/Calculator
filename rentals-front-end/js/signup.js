let confirmation = document.getElementById("submit-btn")
let pass1 = (document.getElementById("password-input")).value
let pass2 = (document.getElementById("confirm-input")).value

confirmation.addEventListener("click", () => {
    if (pass1 != pass2){
        alert("The password entered do not match!!")
    }
})

