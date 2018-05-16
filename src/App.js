import React, {Component} from 'react';
import './assets/css/App.css';
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import MainMenuAccount from "./components/MainMenuAccount";
import Maintenance from "./components/Maintenance";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {
                        <div className={"app-content"}>
                            <Header/>
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={MainPage}/>
                                    <Route exact path="/gotAccount" component={MainMenuAccount}/>
                                    <Route exact path="/maintenance" component={Maintenance}/>
                                </Switch>
                            </div>
                        </div>
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
