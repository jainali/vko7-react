import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';


class Rekisteroitymisikkuna extends Component {

    state = {
        Email: "",
        Password: "",
        Kayttajanimi: ""
    }

    rekisteroidy = () => {
        var un = document.getElementById("Kayttajanimikentta").value
        var pw = document.getElementById("Salasanakentta").value
        var em = document.getElementById("Sahkopostikentta").value

        this.setState({ Kayttajanimi: un, Password: pw, Email: em }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <Jumbotron>
                <AvForm>
                    <h2>Rekisteröidy</h2>
                    <AvField
                        id="Sahkopostikentta"
                        name="text"
                        label="Sähköpostiosoite"
                        type="email"
                        validate={{
                            required: { value: true, errorMessage: 'Syötä sähköpostiosoite' },
                            email: { value: true, errorMessage: 'Virheellinen sähköpostiosoite' }
                        }} />
                    <AvField
                        id="Kayttajanimikentta"
                        name="Kayttajanimikentta"
                        label="Valitse käyttäjänimi"
                        type="text"
                        value={this.state.kayttajanimi}
                        validate={{
                            required: { value: true, errorMessage: 'Käyttäjänimi pakollinen' },
                            pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Vain numerot ja kirjaimet ovat sallittu' },
                            minLength: { value: 2, errorMessage: 'Käyttäjänimen pituuden tulee olla 2-20 merkkiä' },
                            maxLength: { value: 20, errorMessage: 'Käyttäjänimen pituuden tulee olla 2-20 merkkiä' }
                        }} />
                    <AvField
                        id="Salasanakentta"
                        name="Salasanakentta"
                        label="Valitse salasana"
                        type="password"
                        value={this.state.salasana}
                        validate={{
                            required: { value: true, errorMessage: 'Salasana pakollinen' },
                            pattern: { value: '^[A-Za-z0-9.*+-/!?#]+$', errorMessage: 'Voit muodostaa salasanan vain kirjaimista, numeroista ja merkeistä .*+-/!?#' },
                            minLength: { value: 5, errorMessage: 'Salasanan pituuden oltava 5-20 merkkiä' },
                            maxLength: { value: 20, errorMessage: 'Salasanan pituuden oltava 5-20 merkkiä' }
                        }} />
                    <Button color="secondary" onClick={this.rekisteroidy}>Rekisteröidy</Button>{' '}
                </AvForm>
            </Jumbotron>
        );
    }
}

export default Rekisteroitymisikkuna;