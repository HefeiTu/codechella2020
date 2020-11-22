import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import Geocode from "react-geocode";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


var location = [0, 0];

export default class GeoButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.componentDidMount = this.componentDidMount.bind(this);
        
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        location = [position.coords.latitude, position.coords.longitude]});
        console.log(location);
        alert(location);
        this.getStreetAddress();
      
    }

    getStreetAddress() {
      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
      Geocode.setApiKey("AIzaSyC9PowQqp4ZK1mx7nThxYkg6QV_KEk39wE");
      
      // set response language. Defaults to english.
      Geocode.setLanguage("en");
      
      // set response region. Its optional.
      // A Geocoding request with region=es (Spain) will return the Spanish city.
      Geocode.setRegion("us");
      
      // Enable or disable logs. Its optional.
      Geocode.enableDebug();
      
      // Get address from latitude & longitude.
      Geocode.fromLatLng(location[0], location[1]).then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );
    }
    
    render() {
        return (
            <div className={useStyles.root}>
              <Button variant="contained" color="primary" onClick={this.componentDidMount} >
                Get my location
              </Button>
              {/* <Typography variant="h1" component="h2" gutterBottom>
                    Welcome to the survey 
              </Typography> */}
            </div>
          );
        }
    
}