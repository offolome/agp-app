import React from "react";
import LoginBtn from "../Buttons/loginBtn";

const Login = () => {
    return (
        <div className="container">
            <form action="">
                <h2> Connexion </h2>

                <input type="text" id="lname" name="lasstname" placeholder="Nom utilisateur" /> 

                <input type="password" id="password" name="password" placeholder="Mot de passe" />

                <label for="forgotpassword"><a className="forgot" href="#"> Mot de passe oublié </a></label>

                <br /><br />

                <LoginBtn />

                <label for="register"> Si vous n'avez pas de compte </label>
                <a className="registre" href="#"> Inscrivez-vous </a>
            </form>
        </div>
    );
}

export default Login;