import React, {Component} from 'react';
import './assets/css/App.css';
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import MainMenuAccount from "./components/MainMenuAccount";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {
                        <div>
                            <Header/>
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={MainPage}/>
                                    <Route exact path="/gotAccount" component={MainMenuAccount}/>
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
