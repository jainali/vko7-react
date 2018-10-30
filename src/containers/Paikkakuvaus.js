import React, { Component } from 'react';
import Paikantiedot from '../components/Paikantiedot';

// Paikkakuvaus
// Mapataan läpi Paikka-näkymän kautta tullut taulukko, joka sisältää paikan tiedot.
// Muotoilu alla Paikantiedot-kontrollerissa.

class Paikkakuvaus extends Component {
    render() {

        var esiteltavaPaikka = this.props.paikanTiedot.map(function (paikka) {
            return (<Paikantiedot paikka={paikka} key={paikka.Paikka_id} />)
        })

        return (
            <div>
                {esiteltavaPaikka}
            </div>
        );
    }
}

export default Paikkakuvaus;