import React, { Component } from 'react';

// 

class Kommentti extends Component {
    render() {
        return (
            <div>
                Arvosana: {this.props.kommentti.Arvosana}<br/>
                <i>{this.props.kommentti.Teksti}</i><br/>
                {/* Kommentoijan nimi */}
                {this.props.kommentti.Aikaleima}
                <hr/>
            </div>
        );
    }
}

export default Kommentti;