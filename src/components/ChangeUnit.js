import React, { Component } from 'react';

class ChangeUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }

    render() {
        return (
            <div className="row float-right switch-wrapper">
                <span className="unit-fahrenheit">F</span>
                <input ref="switch" 
                    onChange={this.props.toggle} 
                    className="switch" type="checkbox" 
                />
                <div>
                    <div></div>
                </div>
                <span className="unit-celcius">C</span>
            </div>
        )
    }
}

export default ChangeUnit;