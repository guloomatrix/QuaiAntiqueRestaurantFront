const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
            // ici, il faudra appeler l'API pour véridier les credentials en BDD
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("vous êtes connecté");

        window.location.replace("/");
    }
    else{
        
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
    }
}