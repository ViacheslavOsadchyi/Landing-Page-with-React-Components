import React, {Component} from 'react';

class Slider extends Component {
	constructor (props){
		super(props);
		this.state = {
			slideNum: null
		}
	}
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

module.exports = Slider;