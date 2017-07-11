import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer, {initialState} from '../reducers/sliderReducer';
import Banner from '../components/Banner';

import bannerStyles from '../css/bannerApp.css';

class BannerApp extends Component {
	constructor(props){
		super(props);
		this.initialState = Object.assign({},initialState);
		this.store = createStore(
			reducer,
			this.initialState,
			applyMiddleware(thunk)
		);
	}
	render(){
		return (
			<Provider store={this.store}>
				<Banner {...this.props} />
			</Provider>
		);
	}
}

export default BannerApp;