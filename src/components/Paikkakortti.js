import React, { Component } from 'react';

class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {
        return (
            <div>
                {this.props.paikka.Nimi}
            </div>
        );
    }
}

export default Paikkakortti;