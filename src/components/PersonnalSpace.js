import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PersonnalSpace extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <Link to={"/gotAccount"} className={"col-xs-1"}>
                    <button className={"back-btn btn btn-lg col-xs-12"}>Retour</button>
                </Link>
                <Link to={'/'} className={"col-xs-1 col-xs-offset-10"}>
                    <button className={"btn btn-lg quit col-xs-12"}>Accueil</button>
                </Link>
                <div className={"col-xs-10 mt1"}>
                    <h3 className={"text-center"}>Mon espace personnel</h3>
                    <div className={"col-xs-10 col-xs-offset-3"}>
                        <div className="col-xs-8 col-ws-offet-2 btn-grp-1">
                            <Link to={"/maintenance"}>
                                <button className="center-block btn0 btn btn-lg col-xs-10">Je crée ou modifie mon CV</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn1 btn btn-lg col-xs-10">Je trouve une formation</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn2 btn btn-lg col-xs-10">Je consulte mes paiements</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn1 btn btn-lg col-xs-10">J'imprime mes attestations</button>
                            </Link>
                            <Link to={"/maintenance"}>
                                <button className="center-block btn0 btn btn-lg col-xs-10">Je signale un changement</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PersonnalSpace;