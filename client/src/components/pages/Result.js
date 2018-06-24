import React from "react";

function initMap(){

  var startLocation = {lat: 30.2747, lng: -97.7404};

  map = new google.maps.InfoWindow(document.getElementById('map'),{
    zoom: 12, 
    center: startLocation,
    gestureHandling: 'greedy'
  });
}

// home to google maps 
const Result = () =>
  <div>
    <h1>Result</h1>
      <div id="map">
      </div>   
  </div>;

export default Result;
