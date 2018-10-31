import React, { Component } from 'react';
import Paikkakuvaus from '../containers/Paikkakuvaus';
import LisaaKommentti from '../containers/LisaaKommentti';
import Kommentit from '../containers/Kommentit';
import { Jumbotron} from 'reactstrap';
import { haePaikanTiedot, haeKommentitPaikasta } from '../ServiceClient';


class Paikat extends Component {
    
    state = {
        kommenttidata: [],
        paikkadata: [],
    }
       
    componentDidMount() {
        console.log("hakemassa, " + this.props.match.params.Paikka_id);
        haePaikanTiedot(this.props.match.params.Paikka_id, function (paikantiedot) {
            console.log("Are you here")
            console.log(paikantiedot);
            this.setState({ paikkadata: paikantiedot }, () => {
                console.log("Paikan tiedot haettu");
                console.log(this.state.paikantiedot);
            });
        }.bind(this));

        haeKommentitPaikasta(this.props.match.params.Paikka_id, function (kommenttilista){
            console.log("How about here")
            this.setState({ kommenttidata: kommenttilista }, () => {
            });
        
        }.bind(this));
    }
    
    render() {
        
        return (
            <div>
                <Paikkakuvaus paikanTiedot={this.state.paikkadata}/>
                <LisaaKommentti />
                <Jumbotron>
                    <Kommentit paikanKommentit={this.state.kommenttidata} />
                </Jumbotron>
            </div >
        );
    }
}

export default Paikat;
