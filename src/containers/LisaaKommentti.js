import React, { Component } from 'react';
import { UncontrolledCollapse, Card, CardBody, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { luoKommentti } from '../ServiceClient';

// Lisää kommentti (Paikka-näkymän sisällä)

class LisaaKommentti extends Component {

    state = {
        Paikka_id: 0,
        Teksti: "",
        Arvosana: 1
    }

    uusiKommentti = () => {
        console.log(this.state.Arvosana)

        this.setState({
            
            // Arvosana välittyy stateen vetolaatikon arvoa muutettaessa
            Paikka_id: this.props.paikanTiedot.Paikka_id,
            Teksti: document.getElementById("Kommenttiteksti").value, }, () => {

            luoKommentti(this.state, function (response) {
                // console.log(response);
                if (response === 201) {
                    // tähän redirect
                    console.log("Perille meni!");
                }
            })
        })
    }
    handleArvosanaChange = (e) => {
        this.setState({ Arvosana: e.target.value })
    }

    render() {
        return (
            <div>
                <hr />
                <Button color="primary" id="toggler" style={{ marginLeft: '1rem' }}>Lisää kommentti</Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <AvForm className="LisaaKommentti" >
                                <Row form>
                                    <Col md={8}>
                                        <FormGroup>
                                            <AvField id="Kommenttiteksti" name="Kommenttiteksti" label="Kirjoita kommentti:" type="textarea" errorMessage="Ole hyvä ja tarkista, että kommenttisi on asianmukainen"
                                                validate={{
                                                    required: { value: true },
                                                    minLength: { value: 4 },
                                                    maxLength: { value: 500 }
                                                }} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="LisaaKommentti">Arvosana</Label>
                                    <Input type="select" name="Arvosana" value={this.state.Arvosana} onChange={this.handleArvosanaChange}>
                                        {/* <Input type="select" name="Arvosana" name="Arvosana" value={this.state.Arvosana}> */}
                                        <option selectedvalue="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>
                                <Button color="primary" onClick={this.uusiKommentti}>Jätä kommentti</Button>{' '}
                            </AvForm>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <hr />
            </div>
        );
    }
}

export default LisaaKommentti;


class P extends Component {
    render() {
        return (
            <div>
                {this.props.paikka.paikanID}
            </div>
        );
    }
}
