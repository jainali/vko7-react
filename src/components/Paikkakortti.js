import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

class Paikkakortti extends Component {

    // Pääsy taulukon alkioihin

    render() {
        var kuva="";
        if(this.props.paikka.Paakuva!=null)
            kuva='data:image/jpg;base64,'+this.props.paikka.Paakuva;

        return (
            <div className="col-sm-6 col-md-6 col-lg-4">
                <Jumbotron>
                    <h2><Link to={`/paikat/${this.props.paikka.Paikka_id}`}>{this.props.paikka.Nimi}</Link></h2>
                    {this.props.paikka.Kuvaus}<br/>
                    <img src={kuva} />
                    {/* <Button link={`/paikat/${this.props.paikka.Nimi}`>Lue lisää</Button> */}
                    <Link to={`/paikat/${this.props.paikka.Paikka_id}`}>Lue lisää</Link>
                </Jumbotron>

            </div >
        );
    }
}

export default Paikkakortti;