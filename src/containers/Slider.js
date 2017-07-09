import React from 'react';
import Slides from '../components/Slides';
import SliderControls from '../components/SliderControls';

function Slider(props) {
	return 	<div className="tmtestSlider">
				<Slides slides={props.slides} />
				<SliderControls />
			</div>;
}

export default Slider;