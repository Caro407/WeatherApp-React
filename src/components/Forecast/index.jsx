import React from 'react';
import Day from './../Day'

const Forecast = (props) => {
  const [data, setData] = React.useState({days: [], isFetching: false});

  React.useEffect(() => {
    const fetchWeather = async () => {
      try {
        setData({days: [], isFetching: true});
        const response = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?key=d44035da864f4c23ac68b2fe314fb054&city=Paris&country=France");
        const forecast = await response.json();
        setData({days: forecast.data, isFetching: true});
      } catch (e) {
        alert(e);
        setData({days: [], isFetching: false});
      }
    };
    fetchWeather();
    }, []);

  return (
    <div>
      <p>{props.latitude} {props.longitude}</p>
      {data.days.map((dailyData) => (
        <Day data={dailyData} key={dailyData.datetime} />
      ))}
    </div>
  );
};

export default Forecast;
