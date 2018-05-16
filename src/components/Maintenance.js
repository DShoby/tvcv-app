import React, {Component} from 'react';
import maintenance from '../assets/images/maintenance.png';
import {Link} from "react-router-dom";

class Maintenance extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <div className={"row"}>
                    <Link to={'/'} className={"col-xs-1"}>
                        <button className={"back-btn btn btn-lg col-xs-12"}>Retour</button>
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