import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Etusivu from '../views/Etusivu';
import Paikka from '../views/Paikka';


// Paikat-apurouter
// Päärouterin alla, käsittelee /paikat/ -osion alla olevia routeja

const PaikatApurouter = () => (
    <Switch>
        <Route exact path="/paikat" component={Etusivu} />
        <Route path="/paikat/:Paikka_id" component={Paikka} />
        {/* <Route path="/Kiitos" component={Kiitos} /> */}
    </Switch>
)

export default PaikatApurouter