import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"] , "/js/auth/signin.js" ),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement mon mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html", ["client"]),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitname
export const websiteName = "Quai Antique";

