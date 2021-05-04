import React from 'react';

const Day = ({ data }) => {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = new Date(data.datetime).getDay();

  return (
    <div className="size center">
      <h2 className="justify">
        <span>
          <img height="30" width="30" alt={data.weather.icon} src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} />
        </span>
         {weekDays[day]} {day}
      </h2>
      <div className="flex data-font">
        <p>{data.app_min_temp}</p>
        <p className="margin-text">/</p>
        <p className="right-data">{data.app_max_temp}</p>
      </div>
    </div>
  );
};

export default Day;
