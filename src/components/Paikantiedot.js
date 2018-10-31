import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import StarRatings from 'react-star-ratings';

// Paikan tiedot
// Paikkakuvaus-containerin kautta välitettyjen tietojen muotoilu

class Paikantiedot extends Component {

    render() {
        let p = this.props.paikka;

        // Jos ei ole vielä kommentteja, täytyy varmistaa, ettei kaadu.
        if (p.KommenttienMaara === 0) {
            p.KommenttienMaara = 1
        }
        var keskiarvo = p.ArvostelujenSumma / p.KommenttienMaara

        return (
            <Jumbotron>
                <h2>{p.Nimi}</h2>
                {p.Kuvaus}<br />
                {p.Katuosoite}, {p.Kaupunki}<br />
                <hr />
                Kommentteja: {p.KommenttienMaara} kpl<br />
                Keskiarvo:<br />
                <StarRatings
                    rating={keskiarvo}
                    // rating={3.54}
                    starDimension="40px"
                    starSpacing="15px"
                />
            </Jumbotron>
        );
    }
}

export default Paikantiedot;