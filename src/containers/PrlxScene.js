import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setStage} from '../actions/prlxSceneActions';


class PrlxScene extends Component {
	componentDidMount() {
		window.addEventListener('scroll',()=>{
			this.props.setStage(this.scene);
		},false);
	}
	render() {
		return 	<div ref={(scene)=>{
					this.scene = scene;
				}} className="prlxScene">
					{this.props.children}
				</div>;		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setStage: function(scene) {
			dispatch(setStage(scene));
		}
	}
}

export default connect(null, mapDispatchToProps)(PrlxScene);