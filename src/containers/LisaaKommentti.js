import React, { Component } from 'react';
import { Collapse, UncontrolledCollapse, Alert, Card, CardBody, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { luoKommentti } from '../ServiceClient';

class LisaaKommentti extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messageSent: false,
            formOpen: true,
        }
    }
    state = {
        Paikka_id: 0,
        Teksti: "",
        Arvosana: 1
    }
    uusiKommentti = () => {
        console.log(this.state.Arvosana)
        this.setState({
            Paikka_id: this.props.paikanTiedot.Paikka_id,
            Teksti: document.getElementById("Kommenttiteksti").value,
            // Arvosana: document.getElementById("Arvosana").value
        }, () => {
            console.log(this.state);
            luoKommentti(this.state, function (response) {
                console.log(response.status);
                if (response.status === 201) {
                    // tähän redirect
                    console.log("Perille meni!");
                    this.Success();
                }
            }.bind(this));
        })
    }

    Success = () => {
        this.setState({ messageSent: true, formOpen: false }, () => {
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
                <Collapse isOpen={this.state.messageSent}>
                    <Alert color="success">
                        Lähetetty, kiitos!
                    </Alert>
                </Collapse>
                <Collapse isOpen={this.state.formOpen}>
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
                </Collapse>
                <hr />
            </div>
        );
    }
}
export default LisaaKommentti;

// import React, { Component } from 'react';
// import { UncontrolledCollapse, Collapse, Card, CardBody, Alert, Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { luoKommentti } from '../ServiceClient';
// class LisaaKommentti extends Component {

//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = { collapse: false };

//     }

//     state = {
//         Paikka_id: 0,
//         Teksti: "",
//         Arvosana: 1,
//         formOpen: true,
//         messageSent: false,
//     }

//     toggle() {
//         this.setState({ collapse: !this.state.collapse }, () => {
//             console.log("togglejee");

//         });
//     }

//     uusiKommentti = () => {
//         console.log(this.state.Arvosana)
//         this.setState({
//             Paikka_id: this.props.paikanTiedot.Paikka_id,
//             Teksti: document.getElementById("Kommenttiteksti").value,
//             // Arvosana: document.getElementById("Arvosana").value
//         }, () => {
//             console.log(this.state);
//             luoKommentti(this.state, function (response) {
//                 console.log(response);
//                 if (response === 201) {
//                     // tähän redirect
//                     console.log("Perille meni!");
//                     this.setState({ messageSent: true, formOpen: false }, () => {
//                         console.log("toimi pliis");
//                     })                    
//                 }
//             })
//         })
//     }
//     handleArvosanaChange = (e) => {
//         this.setState({ Arvosana: e.target.value })
//     }
//     render() {
//         return (
//             <div>
//                 <hr />
//                 {/* <Button color="primary" id="toggler" onClick={this.toggle} style={{ marginLeft: '1rem' }}>Lisää kommentti</Button> */}
//                 {/* <Collapse isOpen={this.state.formOpen}> */}
//                 <Collapse isOpen={this.state.messageSent}>
//                     <Alert color="success">
//                         Kiitos!
//                     </Alert>
//                 </Collapse>
//                 <AvForm className="LisaaKommentti" >
//                     <Row form>
//                         <Col md={8}>
//                             <FormGroup>
//                                 <AvField id="Kommenttiteksti" name="Kommenttiteksti" label="Kirjoita kommentti:" type="textarea" errorMessage="Ole hyvä ja tarkista, että kommenttisi on asianmukainen"
//                                     validate={{
//                                         required: { value: true },
//                                         minLength: { value: 4 },
//                                         maxLength: { value: 500 }
//                                     }} />
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup>
//                         <Label for="LisaaKommentti">Arvosana</Label>
//                         <Input type="select" name="Arvosana" value={this.state.Arvosana} onChange={this.handleArvosanaChange}>
//                             {/* <Input type="select" name="Arvosana" name="Arvosana" value={this.state.Arvosana}> */}
//                             <option selectedvalue="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                         </Input>
//                     </FormGroup>
//                     <Button color="primary" onClick={this.uusiKommentti}>Jätä kommentti</Button>{' '}
//                 </AvForm>
//                 {/* </Collapse> */}
//                 <hr />
//             </div>
//         );
//     }
// }

// export default LisaaKommentti;
