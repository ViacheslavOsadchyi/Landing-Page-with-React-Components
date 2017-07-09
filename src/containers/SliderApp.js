import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer, {initialState} from '../reducers/sliderReducer';
import Slider from '../components/Slider';

import SliderStyles from '../css/Slider.css';

class SliderApp extends Component {
	constructor(props){
		super(props);
		this.initialState = Object.assign({},initialState);

		// needed for next slide index calculations
		this.initialState.slides.lastSlideIndex = this.props.slides.length - 1;
		this.store = createStore(
			reducer,
			this.initialState,
			applyMiddleware(thunk)
		);
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