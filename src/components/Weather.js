import React from "react";
import Forecast from './Forecast';
import ChangeUnit from './ChangeUnit';

const Weather = props => {
	return(
		<div className="weather__info">
			<div className={`weather__info-top group-${props.id > 800 ? 900 :  "".split.call(props.id,"").join("").slice(0,1) + '00' }`}>
				{	
					props.location && <p className="weather__location">
						<span className="weather__value">{ props.location }</span>
					</p> 
				}
				{ 	
					props.description && <p className="weather__description">
						<span className="weather__value">{ props.description }</span>
				</p> 
				}
				{ 	
					props.temperature && props.unit && <p className="weather__temperature">
						<span className="weather__value">{ Math.round(props.temperature)}&deg; {props.unit  === 'imperial' ? 'F' : 'C' }</span>
					</p> 
				}
				<div className="weather__info-image">
					<img className="image" src={`/images/group-${props.id > 800 ? 900 :  "".split.call(props.id,"").join("").slice(0,1) + '00' }.png`}/>
				</div>
			</div>
			<div className="weather__info-bottom">
				{ 
					props.unit && <ChangeUnit unit={props.unit} toggle={props.toggle}/>
				}
				{ 
					props.forecast && <Forecast forecast={props.forecast}/>
				}
			</div>
		</div>
	)
}

export default Weather;