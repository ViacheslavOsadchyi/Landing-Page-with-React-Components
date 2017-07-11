import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import prlxSceneStyles from '../css/prlxScene.css';
import reducer, {initialState} from '../reducers/prlxSceneReducer';
import PrlxScene from './PrlxScene'; 


class PrlxSceneApp extends Component {
	constructor(props) {
		super(props);
		this.initialState = Object.assign({},initialState);
		this.store = createStore(
			reducer,
			this.initialState
		);
	}
	render() {
		return 	<Provider store={this.store}>
					<PrlxScene>
						{this.props.children}
					</PrlxScene>
				</Provider>
	}
}

export default PrlxSceneApp;