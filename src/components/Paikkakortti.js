import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {
        return (
            <div>
                <Link to={`/paikat/${this.props.paikka.Nimi}`}>{this.props.paikka.Nimi}</Link>
            </div>
        );
    }
}

export default Paikkakortti;