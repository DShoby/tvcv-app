import React, {Component} from 'react';
import '../assets/css/Actualise.css';
import {Link} from "react-router-dom";

class Actualise extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <div className={"row"}>
                    <Link to={"/gotAccount"} className={"col-xs-1"}>
                        <button className={"back-btn btn btn-lg col-xs-12"}>Retour</button>
                    </Link>
                    <Link to={'/tutorialActualise'} className={"col-xs-5"}>
                        <button className={"btn btn-lg mt1 col-xs-12 help-btn"}>Comment fonctionne l'application ?
                        </button>
                    </Link>
                    <div className={"col-xs-5"}>
                        <button className={"btn btn-lg col-xs-12 help-btn1"}>Demander l'aide du personnel</button>
                    </div>
                    <Link to={'/'} className={"col-xs-1"}>
                        <button className={"btn btn-lg quit col-xs-12"}>Accueil</button>
                    </Link>
                </div>
                <div className={"col-xs-10 col-xs-offset-1 mt1"}>
                    <h3 className={"text-center"}>Je m'actualise</h3>
                    <form className={"col-xs-8 col-xs-offset-2"}>
                        <div className={"form-group"}>
                            <label htmlFor="rue">Rue et numéro de rue</label>
                            <input type="text" className="form-control" id="rue"
                                   placeholder="5 avenue des Lilas"/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor="ville">Ville</label>
                            <input type="text" className="form-control" id="ville"
                                   placeholder="Paris"/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor="cp">Code postal</label>
                            <input type="text" className="form-control" id="cp"
                                   placeholder="75000"/>
                        </div>
                        <button className={"center-block btn btn-lg mt1 validate"}>Valider mes modifications</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Actualise;