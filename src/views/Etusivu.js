import React, { Component } from 'react';
import Paikkakortit from '../containers/Paikkakortit';
import Hakukentta from '../containers/Hakukentta';
import LisaaPaikka from '../containers/LisaaPaikka';
import { haePaikat } from '../ServiceClient';

class Koti extends Component {

    state = {
        data: []
    }
    
    LuoPaikka = (paikka) => {
        console.dir(paikka);
        this.state.data.push(paikka);
        this.setState(this.state);
    }
    
    componentDidMount = () => {
        console.log("test");
        haePaikat(function (paikkalista) {
            this.setState({ data: paikkalista }, () => {
                console.log("Here");
                console.log(this.state.data);
            });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <Hakukentta />
                <LisaaPaikka paikka={this.LuoPaikka} />
                {/* <Jumbotron> */}
                    <Paikkakortit paikat={this.state.data} />
                {/* </Jumbotron> */}
            </div>
        );
    }
}

export default Koti;
