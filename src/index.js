import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Forecast from './components/Forecast'
//import Day from './components/Day'

const App = () => (
  <div>
    <h1>Weather Forecast</h1>
    <Forecast />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
