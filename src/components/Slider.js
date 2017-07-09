import React from 'react';
import Slides from '../containers/Slides';
import SliderControls from '../containers/SliderControls';

function Slider(props) {
	return 	<div className="tmtestSlider">
				<Slides slides={props.slides} />
				<SliderControls />
			</div>;
}

export default Slider;