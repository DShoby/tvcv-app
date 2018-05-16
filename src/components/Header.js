import React, {Component} from 'react';
import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';

class Header extends Component {

    state = {
        date: ''
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let dateFormatted = new Date();
        dateFormatted = dateFormatted.getDate() + '/' +  (dateFormatted.getMonth()+1) + '/' + dateFormatted.getFullYear();
        this.setState({
            date: dateFormatted
        });
    }


    render() {
        return (
            <div className="navbar navbar-default">
                <a href="/"><img src={logo} alt="logo" className="logo-PE"/></a>
                <h4 className="welcome col-xs-10">
                    Bienvenue à l'agence de Services et Déploiements de Proximité
                </h4>
                <h4 className="date">{this.state.date}</h4>
                <button className={"btn btn-lg danger quit"}>Quitter</button>
            </div>
        );
    }
}

export default Header;

