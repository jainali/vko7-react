import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Collapse } from 'reactstrap';
import classnames from 'classnames';
import Rekisteroitymisikkuna from '../containers/Rekisteroitymisikkuna';
import Kirjautumisikkuna from '../containers/Kirjautumisikkuna';

// Kirjautumisnäkymässä valitaan kahdesta välilehdestä - Kirjaudu tai rekisteröidy.
// Lapsikomponentteina 
// * Kirjautumisikkuna (olemassaolevat käyttäjät)
// * Rekistetoitumisikkuna

class Kirjaudu extends Component {
    constructor(props) {
        super(props);

        // Automaatisoitu toggle-toiminto rekisteröitymis- ja kirjautumistabin välillä
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            failCollapse: false,
            regOpen: true
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                {/* Tabien nimet ja aktivoituminen */}
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            <div className="Login">
                                Kirjaudu
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            <div className="Register">
                                Rekisteröidy
                            </div>
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* Tabien sisällöt */}
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Kirjautumisikkuna/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <Collapse isOpen={this.state.regOpen}>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Rekisteroitymisikkuna />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Collapse>
            </div >
        );
    }
}

export default Kirjaudu;