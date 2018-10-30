import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        console.dir(this.state);
        this.props.paikka(this.state);
    }

    render() {
        return (
            <div>
                 <Form ClassName="LisaaPaikka">
                 <Label for="LisaaPaikka">Lisää Paikka</Label>
            <Row form>
            <Col md={8}>
            <FormGroup>
          
             <Input type="text" name="Nimi" placeholder="Toimijan nimi" value={this.state.Nimi} onChange={this.handleNimiChange} />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
          <Input type="select" name="Kategoria" value={this.state.Kategoria}>
            <option>Ravintola</option>
            <option>Huvitus</option>
            <option>Hotelli</option>
            <option>4</option>
            <option>5</option>
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
          
          <Input type="text" name="Katuosoite" placeholder="Katuosoite" value={this.state.Katunimi} onChange={this.handleKatunimiChange} />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
          <Input type="text" name="Kaupunki" placeholder="kaupungin nimi" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange} />
        </FormGroup>
         </Col>
         </Row>
         <Button value="Create" onClick={this.handleCreateClick}>Submit</Button>
              
      </Form>
            </div>
        );
    }
}

export default LisaaPaikka;