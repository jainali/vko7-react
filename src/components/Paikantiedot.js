import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import Kartta from '../components/Kartta';


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
        
        console.log(keskiarvo);
        console.log(p.Latitude + " " + p.Longitude);
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
                <div>
                    <br />
                    <Kartta latitude={p.Latitude} longitude={p.Longitude}/>
                    <br/>
                    <br/>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </Jumbotron>
        );
    }
}

export default Paikantiedot;