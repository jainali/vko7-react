import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {

        // const Desktop = props => <Responsive {...props} minWidth={992} />;
        // const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
        // const Mobile = props => <Responsive {...props} maxWidth={767} />;
        // const Default = props => <Responsive {...props} minWidth={768} />;

        return (
            <div>
                {/* <Desktop>

                </Desktop> */}
                <Link to={`/paikat/${this.props.paikka.Nimi}`}>{this.props.paikka.Nimi}</Link>
            </div>
        );
    }
}

export default Paikkakortti;