import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
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
        // KOVAKOODAUS
        // this.setState({ data: paikat })
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

var paikat = [{ "Paikka_id": 1, "Kayttaja_id": 15, "Nimi": "Namaskaar", "KUvaus": "Initialainen ravintola", "Kategoria": "Ravintola", "Katunimi": "Manneheinitie 52", "Kaupunki": "HElsinki", "Maa": "Suomi", "KommentienMaara": "2", "ArvostelujenSumma": "8" },
{ "Paikka_id": 2, "Kayttaja_id": 12, "Nimi": "Mahandra", "KUvaus": "Initialainen ravintola", "Kategoria": "Ravintola", "Katunimi": "TIkkurilantie 12", "Kaupunki": "Vantaa", "Maa": "Suomi", "KommentienMaara": "1", "ArvostelujenSumma": "1" }]
