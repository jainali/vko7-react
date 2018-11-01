import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { kirjauduPalvelimelle } from '../ServiceClient';

// Kirjautumisikkuna (Kirjaudu-näkymässä Kirjaudu-tabin takana)
// Kirjautuminen tapahtuu sähköpostiosoitteella backendistä johtuen, mutta valmius käyttäjänimeen

class Kirjautumisikkuna extends Component {

    state = {
        // kayttajanimi: "",
        Email: "",
        Password: ""
    }

    kirjaudu = () => {
        // var un = document.getElementById("Kayttajanimikentta").value
        var pw = document.getElementById("Salasanaform").value
        var mail = document.getElementById("Sahkopostiform").value

        this.setState({ Password: pw, Email: mail }, () => {
            console.log(this.state);

            this.lahetaPalvelimelle();
        });
    }

    lahetaPalvelimelle = () => {
        kirjauduPalvelimelle(this.state.Email, this.state.Password)
        .then(
            // kayttaja => { 
            //     dispatch(success(user));
            //     history.push('/');
            // },
            // error => {
            //     dispatch(failure(error));
            //     dispatch(alertActions.error(error));
            // }
        );        
    }
    

    render() {
        return (
            <Jumbotron>
                <AvForm>
                    <h2>Kirjaudu</h2>
                    <AvField
                        id="Sahkopostiform"
                        name="text"
                        label="Sähköpostiosoite"
                        type="email"
                        validate={{
                            required: { value: true, errorMessage: 'Sähköpostiosoite pakollinen' },
                            email: { value: true, errorMessage: 'Virheellinen sähköpostiosoite' }
                        }} />
                    {/* <AvField
                        id="Kayttajanimikentta"
                        name="Kayttajanimikentta"
                        label="Syötä käyttäjänimesi"
                        type="text"
                        value={this.state.kayttajanimi}
                        validate={{
                            required: { value: true, errorMessage: 'Käyttäjänimi pakollinen' },
                        }} /> */}
                    <AvField
                        id="Salasanaform"
                        name="Salasana"
                        label="Syötä salasanasi"
                        type="password"
                        value={this.state.salasana}
                        validate={{
                            required: { value: true, errorMessage: 'Salasana pakollinen' },
                        }} />
                    <Button color="secondary" onClick={this.kirjaudu}>Kirjaudu sisään</Button>{' '}
                </AvForm>
            </Jumbotron>
        );
    }
}

export default Kirjautumisikkuna;