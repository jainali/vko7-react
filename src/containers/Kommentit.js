import React, { Component } from 'react';
import Kommentti from '../components/Kommentti';

// Kommentit
// Paikka-näkymän kautta tulleen taulukon mäppäys.
// Esitysmuoto käsitellään Kommentti-komponentissa.

class Kommentit extends Component {
    render() {
        var kommentit = this.props.paikanKommentit.map(function (kommentti) {
            return (<Kommentti kommentti={kommentti} key={kommentti.Kommentti_id}/>)
        });

        return (
            <div>
                {kommentit}
            </div>
        );
    }
}

export default Kommentit;