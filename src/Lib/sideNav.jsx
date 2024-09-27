import React from "react";

const SideNav = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="nav-link">
                        <img src="" alt="" />
                        <h1>AGP-TECH</h1>
                    </a>
                </div>
            </nav>
                
            <div>
                <ul className="active">
                    <li><a href="#">Tableau de bord</a></li>
                    <li><a href="#">Client</a></li>
                    <li><a href="#">Vêtements</a></li>
                    <li><a href="#">Rendez-vous</a></li>
                    <li><a href="#">Message</a></li>
                    <li><a href="#">Utilisateurs</a></li>
                    <li><a href="#">Paramètres</a></li>
                </ul>
            </div>
        </>
    );
}

export default SideNav;