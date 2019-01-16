import React from "react";

const daysOfWeek =  {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
}

const Forecast = props => {
    console.log('props', props)
    console.log(typeof props.forecast[0].weather[0]['id'])

    return(
        <div className="form-inline forecast">
            {
                props.forecast.map(day => {
                    return (
                        <div key={day.dt} className="forecast-day col-md-2">
                            <p className="forecast-day-item">{daysOfWeek[new Date(day.dt_txt).getUTCDay()]}</p>
                                <img className="forecast-day-icon" src={`/images/group-${day.weather[0].id > 800 ? 900 :  "".split.call(day.weather[0].id,"").join("").slice(0,1) + '00'}-small.png`}/>
                            <div className="forecast-temp forecast-day-item">{Math.round(day.main.temp)}&deg;</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Forecast;