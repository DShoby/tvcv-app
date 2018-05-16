import React, {Component} from 'react';
import '../assets/css/MainPage.css';
import {Link} from "react-router-dom";

class MainPage extends Component {
    render() {
        return (
            <div className="row main-content">
                <div className="col-xs-10 col-xs-offset-1 btn-content">
                    <div className="col-xs-6 btn-grp-1">
                        <button className="btn0 btn btn-lg col-xs-8 col-xs-offset-2">Accéder directement à l'Emploi Store sans se connecter</button>
                        <div className={"tooltip0 col-xs-8 col-xs-offset-2"}>
                            <h4>J'aimerais trouver la formation et le métier qui me correspondent, créer mon entreprise ou même travailler à l'étranger.</h4>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <Link to={"/maintenance"}>
                            <button className="btn1 btn btn-lg col-xs-8 col-xs-offset-2">Je n'ai pas de compte, m'inscrire</button>
                        </Link>
                        <Link to={"/gotAccount"}>
                            <button className="btn2 btn btn-lg col-xs-8 col-xs-offset-2">J'ai déjà un compte, me connecter</button>
                        </Link>
                        <Link to={"/maintenance"}>
                            <button className="btn3 btn btn-lg col-xs-8 col-xs-offset-2">J'avais un compte, me réinscrire</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;