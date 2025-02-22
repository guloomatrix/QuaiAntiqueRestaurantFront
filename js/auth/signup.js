//implanter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);


function validateForm(){
    const nomOK = validateRequired(inputNom);
    const prenomOK = validateRequired(inputPreNom);
    const mailOK = validateMail(inputMail);
    const passwordOK = validatePassword(inputPassword);
    const passwordConfirmOK = validateConfirmationPassword(inputPassword, inputValidationPassword);

        if (nomOK && prenomOK && mailOK && passwordOK && passwordConfirmOK){
            btnValidation.disabled = false;
    }
        else {
           btnValidation.disabled = true;
        }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;  
   }
   else{
       input.classList.remove("is-valid");
       input.classList.add("is-invalid");
       return false;  
   }

}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
        if (mailUser.match(emailRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid"); 
            return true;  
        }
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;  
       }

}

function validateRequired(input){
        if (input.value != ''){
             input.classList.add("is-valid");
             input.classList.remove("is-invalid");   
             return true;  
        }
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
        }
}

function InscrireUtilisateur(){
 
 
    let dataForm = new FormData(formInscription);

    let myHeaders= new Headers();
    myHeaders.append("Content-type", "application/json");
    
    let raw = JSON.stringify({
        "firstName": dataForm.get("nom") ,
        "lastName": dataForm.get("prenom") ,
        "email": dataForm.get("email") ,
        "password": dataForm.get("mdp") ,
    });

    let requestOptions = {
        method : 'POST',
        headers : myHeaders,
        body : raw,
        redirect : 'follow'
    };

fetch(apiUrl+"registration", requestOptions)
.then(response => {
        if (response.ok) {
            return response.json();
        }
        else{
            alert("erreur lors de l'inscription");
        }
        })
    .then(result => {
        alert("Bravo " + dataForm.get("prenom")+",vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/signin";
    })
            .catch(error => console.log('error', error));
}
