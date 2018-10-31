import React, { Component } from 'react';
import Paikkakortti from '../components/Paikkakortti';
import {
    Container, Row, Col, CardColumns
} from 'reactstrap';
import MediaQuery from 'react-responsive';

// Paikkakortit-container
// Tieto tulee Etusivu-näkymän kautta.
// Sisältää n-määrän paikkojen esikatseluita (paikkakortteja), joiden
// kautta päästään tarkastelemaan varsinaisia paikan tietoja ja
// paikan saamia kommentteja.
// Paikkakorttien muotoilu tapahtuu Paikkakortti-komponentissa.

class Paikkakortit extends Component {

    render() {



        // mappaus
        var paikat = this.props.paikat.map(function (paikka) {
            return (<Paikkakortti paikka={paikka} key={paikka.Paikka_id} />);
        });

        return (
            <div class="container-fluid">
                <div class="row">
                    {paikat}
                </div>
            </div>
        );
    }
}

export default Paikkakortit;
