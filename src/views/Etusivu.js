import React, { Component } from 'react';
import Paikkakortit from '../containers/Paikkakortit';
import Hakukentta from '../containers/Hakukentta';
import LisaaPaikka from '../containers/LisaaPaikka';
import { haePaikat, haePaikatKaupungissa } from '../ServiceClient';

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
        this.lataaListaUudelleen();

        // haePaikat(function (paikkalista) {
        //     this.setState({ data: paikkalista }, () => {
        //         console.log("Alun listahaku");
        //         console.log(this.state.data);
        //     });
        // }.bind(this));
    }

    lataaListaUudelleen = (paikkakunta) => {
        console.log("uusiks lataus");
        haePaikatKaupungissa(paikkakunta, function (kaupunginPaikat) {
            this.setState({ data: kaupunginPaikat }, () => {
                console.log("Kaupungin paikat:")
                console.log(this.state.data);
            });
        }.bind(this));
    }

    render() {
        return (
            <div>
                <Hakukentta paikkaHaku={this.lataaListaUudelleen} />
                <hr />
                <LisaaPaikka paikka={this.LuoPaikka} />
                <hr />
                <Paikkakortit paikat={this.state.data} />
            </div>
        );
    }
}

export default Koti;
