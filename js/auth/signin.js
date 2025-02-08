
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){

    if(mailInput.value=="test@mail.com" && passwordInput.value == "123"){
        
        
    
       const token = "kjhfukhefimodshjfoihjdsfilhjsdmi";
        setToken(token);
       //placer ce token en cookie
   
        setCookie(RoleCookieName, "admin", 7);

        window.location.replace("/");
    
    }

     else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("in-invalid");
    }


    //checkCredentials permet de vérifier l'email et le mdp
    /*let dataForm = new FormData(signinForm);
    
    let myHeaders= new Headers();
    myHeaders.append("Content-type", "application/json");
    
    /*let raw = JSON.stringify({
        "username": dataForm.get("email") ,
        "password": dataForm.get("mdp") ,
    });

   /* let requestOptions = {
        method : 'POST',
        headers : myHeaders,
        body : raw,
        redirect : 'follow'
    };

/*
fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
        })
    .then(result => { 
            //Il faudra récupérer le vrai token
            const token = result.apiToken;
            setToken(token);

        
            //placer ce token en cookie
       
            setCookie(RoleCookieName, result.roles[0], 7);
            window.location.replace("/");
        
    })       

            .catch(error => console.log('error', error));
            // ici, il faudra appeler l'API pour véridier les credentials en BDD
*/   
    }
   
