import React, {Component} from 'react';
import maintenance from '../assets/images/maintenance.png';

class Maintenance extends Component {
    render() {
        return (
            <div className="center-block">
                    <h3 className="text-center"> Maintenance en cours sur la page.</h3>
                    <img src={maintenance} alt="maintenance" className="center-block"/>
            </div>
        );
    }
}

export default Maintenance;