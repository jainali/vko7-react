import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PaikatApurouter from './PaikatApurouter';
import Kirjaudu from '../views/Kirjaudu';
import Etusivu from '../views/Etusivu';

// Päärouter: ohjaa urlia ensimmäisessä asteessa
// Alla olevat routerit:
// *PaikatApurouter - käsittelee /paikat/ -osion alaisia urleja

const Paarouter = () => (
    <Switch>
        <Route exact path="/" component={Etusivu}></Route>
        <Route path="/paikat" component={PaikatApurouter}></Route>
        <Route path="/kirjaudu" component={Kirjaudu}></Route>
    </Switch>
)

export default Paarouter