import React, {Component} from 'react';
import '../assets/css/Actualise.css';
import {Link} from "react-router-dom";

class ActualiseTuto extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <Link to={"/actualise"} className={"col-xs-1"}>
                    <button className={"back-btn btn btn-lg col-xs-12"}>Retour</button>
                </Link>
                <Link to={'/'}>
                    <button className={"btn btn-lg quit col-xs-1"}>Accueil</button>
                </Link>
                <div className={"col-xs-10 col-xs-offset-1"}>
                    <h3 className={"text-center"}>TUTO ACTUALISE</h3>
                </div>
            </div>
        );
    }
}

export default ActualiseTuto;