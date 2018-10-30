import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

// Paikan tiedot
// Paikkakuvaus-containerin kautta välitettyjen tietojen muotoilu

class Paikantiedot extends Component {
    render() {
        let p = this.props.paikka;
        var keskiarvo = p.ArvostelujenSumma / p.KommenttienMaara
        return (
            <Jumbotron>
                <h2>{p.Nimi}</h2>
                {p.Kuvaus}<br />
                {p.Katunimi}, {p.Kaupunki}<br />
                <hr/>
                Kommentteja: {p.KommenttienMaara} kpl
                Keskiarvo: {keskiarvo}
            </Jumbotron>
        );
    }
}

export default Paikantiedot;