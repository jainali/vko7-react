import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { Component } from 'react';
import { UncontrolledCollapse, Card, CardBody, Col, Row, Button, FormGroup, Label, Input, } from 'reactstrap';

class LisaaPaikka extends Component {
    state={ "Paikka_id": 1, "Kayttaja_id": 15, "Nimi": "", "Kuvaus": "", "Kategoria": "", "Katunimi": "", "Kaupunki": "", "Maa": "Suomi", "KommentienMaara": 0, "ArvostelujenSumma": 0 };

    handleNimiChange=(e)=>{
        this.setState({Nimi:e.target.value});
    }
    handleKuvausChange=(e)=>{
        this.setState({Kuvaus:e.target.value});
    }
    handleKategoriaChange=(e)=>{
        this.setState({Kategoria:e.target.value});
    }
    handleKatunimiChange=(e)=>{
        this.setState({Katunimi:e.target.value});
    }
    handleKaupunkiChange=(e)=>{
        this.setState({Kaupunki:e.target.value});
    }

    handleCreateClick=(e)=>{
        e.preventDefault();
        console.dir(this.state);
        this.props.paikka(this.state);
    }

    handleInvalidSubmit=()=>{
        console.log("Invalid");
    }

    render() {
        return (
            <div>
                
    <Button color="primary" id="toggler"  style={{ marginLeft: '1rem'}}>Lisää Paikka</Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                <AvForm className="LisaaPaikka" onValidSubmit={this.handleCreateClick} onInvalidSubmit={this.handleInvalidSubmit}>
                    <Row form>
                    <Col md={8}>
                    <FormGroup>
                    <AvField name="Nimi" label="Nimi" type="text" value={this.state.Nimi} onChange={this.handleNimiChange} errorMessage="Nimi vaaditaan" validate={{
                     required: {value: true},
                    minLength: {value: 2},
                    maxLength: {value: 50}
                     }} />
                    {/* <Input type="text" name="Nimi" placeholder="Toimijan nimi" value={this.state.Nimi} onChange={this.handleNimiChange} required={true}/> */}
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="LisaaPaikka">Kategoria</Label>
                    <Input type="select" name="Kategoria" value={this.state.Kategoria} onChange={this.handleKategoriaChange}>
                    <option selectedvalue="Ravintola">Ravintola</option>
                    <option value="Huvitus">Huvitus</option>
                    <option value="Hotelli">Hotelli</option>
                    </Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                    <Label>Palvelu kuvaus</Label>
                    <Input type="textarea" name="Kuvaus" placeholder="Palvelun kuvaus" value={this.state.Kuvaus} onChange={this.handleKuvausChange} />
                    </FormGroup>
                    <Row form>
                    <Col md={8}>
                    <FormGroup>
                    <AvField name="Katuosoite" label="Katuosoite" type="text" value={this.state.Katunimi} onChange={this.handleKatunimiChange} errorMessage="Katusoite vaaditaan" validate={{
                        required: {value: true},
                        minLength: {value: 2},
                        maxLength: {value: 50}
                    }} />
                    {/* <Input type="text" name="Katuosoite" placeholder="Katuosoite" value={this.state.Katunimi} onChange={this.handleKatunimiChange}  required={true}/> */}
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <AvField name="Kaupunki" label="Kaupunki" type="text" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange} errorMessage="Kaupunki vaaditaan" validate={{
                        required: {value: true},
                        minLength: {value: 2},
                        maxLength: {value: 50}
                    }} />
                    {/* <Input type="text" name="Kaupunki" placeholder="kaupungin nimi" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange}  required={true}/> */}
                    </FormGroup>
                    </Col>
                    </Row>
                    <Input type="submit" value="Create" />
                    
                </AvForm>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
      
            </div>
        );
    }
}

export default LisaaPaikka;