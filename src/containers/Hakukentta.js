import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { haePaikatKaupungissa } from '../ServiceClient';

// Etusivun hakukenttä
// Kentän ulkoasu ja paikkakuntatiedon välitys juurikomponentille

class Hakukentta extends Component {

    state = {
        paikkakunnanPaikat: []
    }

    // Hakukentän käsittely joko Hae-nappulaa tai Enteriä painamalla
    hakutoiminto = (e) => {
        console.log("haettu Hae-napilla");
        this.haetaan();
    }
    keyPress = (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            console.log("Haettu painamalla Enteriä");
            e.preventDefault();
            this.haetaan();
        }
    }

    haetaan = () => {
        // Tässä välitetään juurikomponentille paikkakunnan nimi,
        // jotta paikkakortit ladataan oikealle paikkakunnalle
        this.props.paikkaHaku(document.getElementById("Paikkakuntahaku").value);        
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={11}>
                        <Input
                            type="text"
                            id="Paikkakuntahaku"
                            name="Paikkakuntahaku"
                            placeholder="Kirjoita paikkakunta"
                            onKeyPress={this.keyPress}
                        />
                    </Col>
                    <Col sm={1}>
                        <Button color="primary" onClick={this.hakutoiminto}>Hae</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Hakukentta;