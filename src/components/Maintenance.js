import React, {Component} from 'react';
import maintenance from '../assets/images/maintenance.png';
import {Link} from "react-router-dom";

class Maintenance extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <div className={"row"}>
                    <Link to={'/'} className={"col-xs-1 col-xs-offset-11"}>
                        <button className={"btn btn-lg quit col-xs-11"}>Accueil</button>
                    </Link>
                </div>


                <div className="center-block">
                    <h3 className="text-center"> Maintenance en cours sur la page</h3>
                    <img src={maintenance} alt="maintenance" className="center-block"/>
                </div>
            </div>
        );
    }
}

export default Maintenance;