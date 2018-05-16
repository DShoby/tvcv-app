import React, {Component} from 'react';
import '../assets/css/MainMenuAccount.css';
import {Link} from "react-router-dom";

class MainMenuAccount extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <Link to={"/"}>
                <button className={"back-btn btn btn-lg col-xs-1"}>Retour</button>
                </Link>
                <Link to={'/'}>
                    <button className={"btn btn-lg quit col-xs-1"}>Quitter</button>
                </Link>
                <div className={"col-xs-10 col-xs-offset-1"}>
                    <div className="col-xs-6 btn-grp-1">
                        <Link to={"/actualise"}>
                        <button className="btn1 btn btn-lg col-xs-12">Je m'actualise</button>
                        </Link>
                        <button className="btn4 btn btn-lg col-xs-12">Je recherche des offres d'emploi</button>
                        <button className="btn2 btn btn-lg col-xs-12">J'accède à l'Emploi Store</button>
                        <button className="btn3 btn btn-lg col-xs-12">J'accède à mon espace personnel</button>
                    </div>
                    <div className="col-xs-6 desc-area">
                        <h4 className={"col-xs-12"}>Dates d'actualisation possibles.</h4>
                        <h4 className={"col-xs-12 mt"}>Je suis formé et souhaite rechercher des offres d'emploi dans mon domaine.</h4>
                        <h4 className={"col-xs-12 mt-1"}>J'aimerais trouver la formation et le métier qui me correspondent, créer mon entreprise ou même travailler à l'étranger.</h4>
                        <h4 className={"col-xs-12 mt-2"}>Je veux créer ou modifier mon CV, trouver une formation, consulter mes paiements, imprimer mes attestations, signaler un changement.</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenuAccount;