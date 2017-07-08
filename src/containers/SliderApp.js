import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/sliderReducer';
import Slider from './Slider';

class SliderApp extends Component {
	constructor(props){
		super(props);
		this.store = createStore(reducer);
	}
	render(){
		return (
			<Provider store={this.store}>
				<Slider {...this.props} />
			</Provider>
		);
	}
}

export default SliderApp;