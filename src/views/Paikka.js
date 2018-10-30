import React, { Component } from 'react';
import Paikkakuvaus from '../containers/Paikkakuvaus';
import LisaaKommentti from '../containers/LisaaKommentti';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kommentit from '../containers/Kommentit';
import { Jumbotron} from 'reactstrap';


class Paikat extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.setState({ data: kommentit });
    }

    render() {
        return (
            <div>
                Paikka
                <Paikkakuvaus />
                <LisaaKommentti />
                <Jumbotron>
                    <Kommentit paikanKommentit={this.state.data} />
                </Jumbotron>
            </div >
        );
    }
}

export default Paikat;

var kommentit = [{ "Kommentti_id": "123", "Kayttaja_id": "12", "Paikka_id": "1", "Teksti": "Testikokemus joka oli ok", "Aikaleima": "2018-01-01 12:00", "OnkoKuvia": false, "Arvosana": "3" },
{ "Kommentti_id": "125", "Kayttaja_id": "15", "Paikka_id": "1", "Teksti": "Testikokemus joka oli huippu", "Aikaleima": "2018-02-03 12:00", "OnkoKuvia": false, "Arvosana": "5" },
{ "Kommentti_id": "127", "Kayttaja_id": "12", "Paikka_id": "2", "Teksti": "Testikokemus joka oli surkea", "Aikaleima": "2018-02-01 12:00", "OnkoKuvia": false, "Arvosana": "1" }]