import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { Component } from 'react';
import { FormText,UncontrolledCollapse, Card, CardBody, Col, Row, Button, FormGroup, Label, Input, } from 'reactstrap';
import { luoPaikka } from '../ServiceClient';

class LisaaPaikka extends Component {

    state = { "Paikka_id": 0, "Kayttaja_id": 15, "Nimi": "", "Kuvaus": "", "Kategoria": "Ravintolat", "Katuosoite": "", "Kaupunki": "","Paakuva": "", "Maa": "Suomi", "KommenttienMaara": 1, "ArvostelujenSumma": 0 };

    handleNimiChange = (e) => {
        this.setState({ Nimi: e.target.value });
    }
    handleKuvausChange = (e) => {
        this.setState({ Kuvaus: e.target.value });
    }
    handleKategoriaChange = (e) => {
        this.setState({ Kategoria: e.target.value });
    }
    handleKatunimiChange = (e) => {
        this.setState({ Katuosoite: e.target.value });
    }
    handleKaupunkiChange = (e) => {
        this.setState({ Kaupunki: e.target.value });
    }

    handlePaakuvaChange=(e)=>{
        
        var kuva= e.target.files[0];
        console.dir(kuva);
        var reader = new FileReader();
        reader.readAsDataURL(kuva);
        reader.onload = function () {
          console.log(reader.result);
          this.setState({ Paakuva: reader.result });
        }.bind(this); 
       
       // console.dir(bKuva);
        //this.setState({Paakuva:bKuva});
        console.dir(this.state);
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
        
        
    }

    //     function getBase64(file) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //       console.log(reader.result);
    //     };
    //     reader.onerror = function (error) {
    //       console.log('Error: ', error);
    //     };
    //  }

    handleCreateClick = (e) => {
        this.setState({Paakuva:this.state.Paakuva.replace('data:image/jpeg;base64,','')});
        console.log("CreateClick");

        this.vieTietokantaan();
    }

    handleInvalidSubmit = () => {
        console.log("Invalid");
    }

    vieTietokantaan = () => {
        console.log("VieTietokantaan");
        console.dir(this.setState);
        luoPaikka(this.state, function (response) {
            console.dir(response)

            if (response === 201) {
                // tähän redirect
                console.log("Perille meni!");
                // this.props.history.push('/');
                // this.Success();
            }

        }.bind(this));
    }

    // Success = () => {
    //     this.props.history.push('/Kiitos');
    // }



    render() {
        return (
            <div>
                <Button color="primary" id="toggler" style={{ marginLeft: '1rem' }}>Lisää Paikka</Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <AvForm className="LisaaPaikka" onValidSubmit={this.handleCreateClick} onInvalidSubmit={this.handleInvalidSubmit}>
                                <Row form>
                                    <Col md={8}>
                                        <FormGroup>
                                            <AvField name="Nimi" label="Nimi" type="text" value={this.state.Nimi} onChange={this.handleNimiChange} errorMessage="Nimi vaaditaan" validate={{
                                                required: { value: true },
                                                minLength: { value: 2 },
                                                maxLength: { value: 50 }
                                            }} />
                                            {/* <Input type="text" name="Nimi" placeholder="Toimijan nimi" value={this.state.Nimi} onChange={this.handleNimiChange} required={true}/> */}
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="LisaaPaikka">Toimiala</Label>
                                            <Input type="select" name="Kategoria" value={this.state.Kategoria} onChange={this.handleKategoriaChange}>
                                                <option selectedvalue="Ravintola">Ravintolat</option>
                                                <option value="Huvitus">Huvitukset</option>
                                                <option value="Hotelli">Hotellit</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label>Palvelun kuvaus</Label>
                                    <Input type="textarea" name="Kuvaus" placeholder="Palvelun kuvaus" value={this.state.Kuvaus} onChange={this.handleKuvausChange} />
                                </FormGroup>
                                <Row form>
                                    <Col md={8}>
                                        <FormGroup>
                                            <AvField name="Katuosoite" label="Katuosoite" type="text" value={this.state.Katunimi} onChange={this.handleKatunimiChange} errorMessage="Katusoite vaaditaan" validate={{
                                                required: { value: true },
                                                minLength: { value: 2 },
                                                maxLength: { value: 50 }
                                            }} />
                                            {/* <Input type="text" name="Katuosoite" placeholder="Katuosoite" value={this.state.Katunimi} onChange={this.handleKatunimiChange}  required={true}/> */}
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <AvField name="Kaupunki" label="Kaupunki" type="text" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange} errorMessage="Kaupunki vaaditaan" validate={{
                                                required: { value: true },
                                                minLength: { value: 2 },
                                                maxLength: { value: 50 }
                                            }} />
                                            {/* <Input type="text" name="Kaupunki" placeholder="kaupungin nimi" value={this.state.Kaupunki} onChange={this.handleKaupunkiChange}  required={true}/> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                <Label for="yritysKuva">Image</Label>
                                    <Input type="file" name="Paakuva" id="yritysKuva" onChange={this.handlePaakuvaChange}/>
                                    <FormText color="muted">
                                    Valitse yritystä edustava kuva tähän
                                </FormText>
                                </FormGroup>
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