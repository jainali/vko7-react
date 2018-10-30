import React, { Component } from 'react';

class Kommentti extends Component {
    render() {
        return (
            <div>
                {this.props.kommentti.Teksti}
            </div>
        );
    }
}

export default Kommentti;