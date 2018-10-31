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
    constructor(props) {
        super(props);
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

var kommentit = [{ "Kommentti_id": "123", "Kayttaja_id": "12", "Paikka_id": "1", "Teksti": "Namaskaar-kokemus joka oli ok", "Aikaleima": "2018-01-01 12:00", "OnkoKuvia": false, "Arvosana": "3" },
{ "Kommentti_id": "124", "Kayttaja_id": "15", "Paikka_id": "1", "Teksti": "Namaskaar-kokemus joka oli huippu", "Aikaleima": "2018-02-03 12:00", "OnkoKuvia": false, "Arvosana": "5" },
{ "Kommentti_id": "125", "Kayttaja_id": "12", "Paikka_id": "2", "Teksti": "Namaskaar-kokemus joka oli surkea", "Aikaleima": "2018-02-01 12:00", "OnkoKuvia": false, "Arvosana": "1" }]

var paikanTiedot = [{ "Paikka_id": 1, "Kayttaja_id": 15, "Nimi": "Namaskaar", "Kuvaus": "Initialainen ravintola", "Kategoria": "Ravintola", "Katunimi": "Manneheinitie 52", "Kaupunki": "Helsinki", "Maa": "Suomi", "KommenttienMaara": "2", "ArvostelujenSumma": "8" }]