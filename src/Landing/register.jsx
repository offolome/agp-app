import React from "react";
import RegisterBtn from "../Buttons/registerBtn";

const Register = () => {
    return (
        <div className="container">
            <form action="">
                <h3> Inscription </h3>

                <input type="text" id="lname" name="lastname" placeholder="Nom" /> 

                <input type="text" id="fname" name="firstname" placeholder="Prénom" /> 

                <input type="text" id="uname" name="username" placeholder="Nom utilisateur" /> 

                <input type="email" id="email" name="email" placeholder="Email" /> 

                <input type="password" id="password" name="password" placeholder="Mot de passe" />

                <input type="text" id="phone" name="phone" placeholder="Numéro de téléphone" />

                <br />
                
                <RegisterBtn />

            </form>
        </div>
    );
}

export default Register;