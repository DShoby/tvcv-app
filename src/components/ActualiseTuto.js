import React, {Component} from 'react';
import '../assets/css/ActualiseTuto.css';
import {Carousel} from "react-bootstrap";
import tuto1 from "../assets/images/tuto1.jpeg";
import tuto2 from "../assets/images/tuto2.jpeg";
import tuto3 from "../assets/images/tuto3.jpeg";
import {Link} from "react-router-dom";

class ActualiseTuto extends Component {
    render() {
        return (
            <div className={"content-area"}>
                <div className={"row"}>
                    <Link to={"/actualise"} className={" col-xs-2 col-xs-offset-5"}>
                        <button className={"back-btn btn btn-lg center-block"}>Quitter le tutoriel</button>
                    </Link>
                </div>
                <div className={"col-xs-10 col-xs-offset-1 mt1"}>
                <Carousel className={"full-width"}>
                    <Carousel.Item>
                        <img width={1500} height={800} alt="1500x500" src={tuto1}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1500} height={800} alt="1500x500" src={tuto2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1500} height={800} alt="1500x500" src={tuto3}/>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        );
    }
}

export default ActualiseTuto;