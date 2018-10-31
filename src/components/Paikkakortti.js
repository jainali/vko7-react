import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'reactstrap';

class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {
        return (
            <div class="col-sm-6 col-md-6">
                <Jumbotron>

                    <h1 className="display-2"><Link to={`/paikat/${this.props.paikka.Nimi}`}>{this.props.paikka.Nimi}</Link></h1>
                    {this.props.paikka.Kuvaus}<br/>
                    {/* <Button link={`/paikat/${this.props.paikka.Nimi}`>Lue lisää</Button> */}
                    <Link to={`/paikat/${this.props.paikka.Nimi}`}>Lue lisää</Link>
                </Jumbotron>

            </div >
        );
    }
}

export default Paikkakortti;