import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer, {initialState} from '../reducers/housesReducer';
import Houses from './Houses';

import housesStyles from '../css/housesApp.css';

class HousesApp extends Component {
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
		return 	<Provider store={this.store}>
					<Houses />
				</Provider>;
	}
}

export default HousesApp;