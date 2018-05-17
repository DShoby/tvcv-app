import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PersonnalSpace extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <div className={"row"}>
                <Link to={"/gotAccount"} className={"col-xs-1"}>
                    <button className={"back-btn btn btn-lg col-xs-12"}>Retour</button>
                </Link>
                <Link to={'/'} className={"col-xs-1 col-xs-offset-10"}>
                    <button className={"btn btn-lg quit col-xs-11"}>Accueil</button>
                </Link>
                </div>
                <div className={"col-md-10 col-md-offset-1 mt1"}>
                    <h3 className={"text-center"}>Mon espace personnel</h3>
                    <div className={"col-md-12"}>
                        <div className="col-md-12 btn-grp-1">
                            <Link to={"/maintenance"} className={"col-md-12"}>
                                <button className="btn0 btn btn-lg col-xs-8 col-xs-offset-2">Je crée ou modifie mon CV</button>
                            </Link>
                            <Link to={"/maintenance"} className={"col-md-12"}>
                                <button className="btn1 btn btn-lg col-xs-8  col-xs-offset-2">Je trouve une formation</button>
                            </Link>
                            <Link to={"/maintenance"} className={"col-md-12"}>
                                <button className="btn2 btn btn-lg col-xs-8  col-xs-offset-2">Je consulte mes paiements</button>
                            </Link>
                            <Link to={"/maintenance"} className={"col-md-12"}>
                                <button className="btn1 btn btn-lg col-xs-8  col-xs-offset-2">J'imprime mes attestations</button>
                            </Link>
                            <Link to={"/maintenance"} className={"col-md-12"}>
                                <button className="btn0 btn btn-lg col-xs-8  col-xs-offset-2">Je signale un changement</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PersonnalSpace;