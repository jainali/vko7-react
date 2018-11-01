import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class Kartta extends Component {
    render() {
        return (

                <Map google={this.props.google} zoom={14}
                    style={style}
                    initialCenter={{
                        lat: this.props.latitude,
                        lng: this.props.longitude
                      }}
                >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>Öööö</h1>
                        </div>
                    </InfoWindow>
                </Map>
        );
    }
}

// export default Kartta;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBaYscfsXPx8FTJMSqMxy07RCpNlZyJrvc")
})(Kartta)

const style = {
    width: '92%',
    height: '20%'
}