import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import React, { Component } from 'react';
import { UncontrolledCollapse, Card, CardBody, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

    render() {
        return (
            <div>
                
    <Button color="primary" id="toggler"  style={{ marginBottom: '1rem'}}>Lisää Paikka</Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                <Form className="LisaaPaikka">
                    <Label for="LisaaPaikka">Yrityksen nimi / Kategoria</Label>
                    <Row form>
                    <Col md={8}>
                    <FormGroup>
                
                    <Input type="text" name="Nimi" placeholder="Toimijan nimi" value={this.state.Nimi} onChange={this.handleNimiChange} validations={[required]}/>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Input type="select" name="Kategoria" value={this.state.Kategoria} onChange={this.handleKategoriaChange}>
                    <option selectedvalue="Ravintola">Ravintola</option>
                    <option value="Huvitus">Huvitus</option>
                    <option value="Hotelli">Hotelli</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    </Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                    <Label>Palvelu kuvaus</Label>
                    <Input type="textarea" name="Kuvaus" placeholder="Palvelun kuvaus" value={this.state.Kuvaus} onChange={this.handleKuvausChange} />
                    </FormGroup>
                    <Label>Katuosoite /Kaupunki</Label>
                    <Row form>
                    <Col md={8}>
                    <FormGroup>
                
                    <Input type="text" name="Katuosoite" placeholder="Katuosoite" value={this.state.Katunimi} onChange={this.handleKatunimiChange} validations={[required]}/>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Input type="text" name="Kaupunki" placeholder="kaupungin nimi" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange} validations={[required]} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Input type="submit" value="Create" onClick={this.handleCreateClick}/>
                    
                </Form>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
      
            </div>
        );
    }
}

export default LisaaPaikka;