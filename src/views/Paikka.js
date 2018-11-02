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
            this.setState({ paikkadata: paikantiedot }, () => {
                console.log("Paikan tiedot:");
                console.log(this.state.paikkadata);
            });
        }.bind(this));

        haeKommentitPaikasta(this.props.match.params.Paikka_id, function (kommenttilista){
            this.setState({ kommenttidata: kommenttilista }, () => {
                console.log("Paikan saamat kommentit:")
                console.log(this.state.kommenttidata);
            });
        
        }.bind(this));
    }
    
    render() {
        
        return (
            <div>
                <Paikkakuvaus paikanTiedot={this.state.paikkadata}/>
                <LisaaKommentti paikanTiedot={this.state.paikkadata}/>
                <Jumbotron>
                    <Kommentit paikanKommentit={this.state.kommenttidata} />
                </Jumbotron>
            </div >
        );
    }
}

export default Paikat;
