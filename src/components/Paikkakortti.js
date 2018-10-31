import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'reactstrap';

class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {
        return (
            <div class="col-sm-6 col-md-6 col-lg-4">
                <Jumbotron>

                    <h2><Link to={`/paikat/${this.props.paikka.Paikka_id}`}>{this.props.paikka.Nimi}</Link></h2>
                    {this.props.paikka.Kuvaus}<br/>
                    {/* <Button link={`/paikat/${this.props.paikka.Nimi}`>Lue lisää</Button> */}
                
                    <Link to={`/paikat/${this.props.paikka.Paikka_id}`}>Lue lisää</Link>
                </Jumbotron>

            </div >
        );
    }
}

export default Paikkakortti;