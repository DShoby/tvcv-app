import React, {Component} from 'react';
import '../assets/css/Maintenance.css';
import maintenance from '../assets/images/maintenance.png';

class Maintenance extends Component {
    render() {
        return (
            <div className="row">
                    <h3>Maintenance en cours</h3>
                    <img src={maintenance} alt="maintenance" className="maintenance"/>
            </div>
        );
    }
}

export default Maintenance;