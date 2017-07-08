import React, {Component} from 'react';
import Slide from './Slide';

class Slides extends Component {
	enableMovingTransition() {
		this.slidesContainer.classList.add('tmtestSlider__slidesMovingTransition');		
	}
	disableMovingTransition() {
		this.slidesContainer.classList.remove('tmtestSlider__slidesMovingTransition');		
	}
	enableMoveForward() {
		this.slidesContainer.classList.add('tmtestSlider__slides__move_forward');
	}
	disableMoveForward() {
		this.slidesContainer.classList.remove('tmtestSlider__slides__move_forward');
	}
	enableMoveBackward() {
		this.slidesContainer.classList.add('tmtestSlider__slides__move_backward');
	}
	disableMoveBackward() {
		this.slidesContainer.classList.remove('tmtestSlider__slides__move_backward');
	}
	render() {
		const slides = this.props.data.map(function (slideData) {
			const {
				title,
				desc,
				img,
				extraClass
			} = slideData;
			const key = title.length * desc.length;
			return <Slide key={key} title={title} desc={desc} img={img} extraClass={extraClass} />
		});
		return <div ref={(slidesContainer)=>{
					this.slidesContainer = slidesContainer;
				}} className="tmtestSlider__slides"> 	
					{slides}
				</div>;
	}
}

export default Slides;