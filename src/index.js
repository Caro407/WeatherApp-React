import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Forecast from './components/Forecast'

const App = () => {
  const [geoloc, setGeoloc] = React.useState({latitude: 0, longitude: 0});

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoloc({latitude: position.coords.latitude, longitude: position.coords.longitude});
    });
  }, [])

  return (
  <div>
    <h1>Weather Forecast</h1>
    {(geoloc.latitude === 0 && geoloc.longitude === 0) ? <p>Hé accepte la géoloc</p> : <Forecast latitude={geoloc.latitude} longitude={geoloc.longitude}/>}
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
