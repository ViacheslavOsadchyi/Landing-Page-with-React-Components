import React, {Component} from 'react';
import {connect} from 'react-redux';

class PrlxLayer extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		const {
			name,
			src,
			endPoint,
			stage
		} = this.props;
		const className = `prlxScene__layer prlxScene__layer__type_${name}`;
		const currentParallax = stage * parseInt(endPoint);
		const style = {
			transform: `translate3d(0,${currentParallax}px,0)`
		};
		return 	<div className={className} style={style}>
					<img className='prlxScene__layerImg' src={src} alt />
				</div>;		
	}
}

function mapStateToProps (state) {
	return {
		stage: state.stage
	}
}

export default connect(mapStateToProps)(PrlxLayer);