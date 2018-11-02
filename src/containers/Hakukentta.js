import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10">

                        <Input
                            type="text"
                            id="Paikkakuntahaku"
                            name="Paikkakuntahaku"
                            placeholder="Kirjoita paikkakunta"
                            onKeyPress={this.keyPress}
                        />
                    </div>
                    <div className="col-sm-2">
                        <Button color="primary" onClick={this.hakutoiminto}>Hae</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hakukentta;