import React from "react";

const Form = props => (
	<div className="row form-wrapper">
		 <div className="col-md- mx-auto">
			<form onSubmit={props.getWeather}>
				 <div className="input-group">
					<input type="number" className="form-control" name="zipcode" placeholder="Zipcode..." required/>
					<button className="btn btn-primary" pattern=".{5,5}">Submit</button>
				</div>
			</form>
		</div>
	</div>
);

export default Form;