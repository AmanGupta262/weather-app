import React from 'react';

function SingleDay(props) {
    const {day} = props;
    return (
        <>
        <div className="d-flex single">
            <div className="single-day">
                {day.date}
            </div>
            <img className="single-weather-icon" src={`http://openweathermap.org/img/wn/${day.icon}@4x.png`} alt="" />
            <div className="single-weather">{day.weather}</div>
            <div className="single-min-temp">{day.temp_min} &deg;C</div>
            <div className="single-max-temp">{day.temp_max} &deg;C</div>
        </div>
            
        </>
    );
}

export default SingleDay;