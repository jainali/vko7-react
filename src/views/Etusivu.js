import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Jumbotron
} from 'reactstrap';
import Paikkakortit from '../containers/Paikkakortit';
import Hakukentta from '../containers/Hakukentta';
import LisaaPaikka from '../containers/LisaaPaikka';

class Koti extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        // hakee tietokannasta paikat ja laittaa data-stateen
        this.setState({ data: paikat })
    }

    render() {
        return (
            <div>
                <Hakukentta />
                <LisaaPaikka />
                <Jumbotron>
                    <Paikkakortit paikat={this.state.data} />
                </Jumbotron>
            </div>
        );
    }
}

export default Koti;

var paikat = [{ "Paikka_id": 1, "Kayttaja_id": 15, "Nimi": "Namaskaar", "KUvaus": "Initialainen ravintola", "Kategoria": "Ravintola", "Katunimi": "Manneheinitie 52", "Kaupunki": "HElsinki", "Maa": "Suomi", "KommentienMaara": "2", "ArvostelujenSumma": "8" },
{ "Paikka_id": 2, "Kayttaja_id": 12, "Nimi": "Mahandra", "KUvaus": "Initialainen ravintola", "Kategoria": "Ravintola", "Katunimi": "TIkkurilantie 12", "Kaupunki": "Vantaa", "Maa": "Suomi", "KommentienMaara": "1", "ArvostelujenSumma": "1" }]
