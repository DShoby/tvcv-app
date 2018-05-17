import React, {Component} from 'react';
import '../assets/css/PersonnalSpace.css';
import {Link} from "react-router-dom";

class PersonnalSpace extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <Link to={"/gotAccount"}>
                    <button className={"back-btn btn btn-lg col-xs-1"}>Retour</button>
                </Link>
                <Link to={'/'}>
                    <button className={"btn btn-lg quit col-xs-1"}>Accueil</button>
                </Link>
                <div className={"col-xs-10 col-xs-offset-1 mt1"}>
                    <h3 className={"text-center"}>Je m'actualise</h3>
                    <div className={"col-xs-10 col-xs-offset-3"}>
                        <div className="col-xs-8 col-ws-offet-2 btn-grp-1">
                            <Link to={"/maintenance"}>
                                <button className="center-block btn1 btn btn-lg col-xs-10">Je crée ou modifie mon CV</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn2 btn btn-lg col-xs-10">Je trouve une formation</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn3 btn btn-lg col-xs-10">Je consulte mes paiements</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn2 btn btn-lg col-xs-10">J'imprime mes attestations</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn1 btn btn-lg col-xs-10">Je signale un changement</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PersonnalSpace;