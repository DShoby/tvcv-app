import React, {Component} from 'react';
import '../assets/css/MainPage.css';
import {Link} from "react-router-dom";

class MainPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <div className="col-xs-8 col-xs-offset-2">
                        <button className="btn1 btn btn-lg col-xs-6 col-xs-offset-3">Je n'ai pas de compte, m'inscrire</button>
                        <Link to={"/gotAccount"}>
                            <button className="btn2 btn btn-lg col-xs-6 col-xs-offset-3">J'ai déjà un compte, me connecter</button>
                        </Link>
                        <button className="btn3 btn btn-lg col-xs-6 col-xs-offset-3">J'avais un compte, me réinscrire</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;