import React, { Component } from 'react';
import Paikkakortti from '../components/Paikkakortti';

class Paikkakortit extends Component {
        
    render() {
        // mappaus
        var paikat = this.props.paikat.map(function(paikka) {
            return (<Paikkakortti paikka={paikka} key={paikka.Paikka_id}/>);
        });

        return (
            <div>
                Paikkakortit
                {paikat}
            </div>
        );
    }
}

export default Paikkakortit;