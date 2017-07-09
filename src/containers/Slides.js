import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slide from '../components/Slide';
import swipedetect from '../js/swipedetect.js';
import {moveForward,moveBackward} from '../actions/sliderActions';

class Slides extends Component {
	componentDidMount() {
		const {
			moveForward,
			moveBackward
		} = this.props;		
		swipedetect(this.slidesContainer, (direction)=>{
			switch (direction){
				case 'left':
					moveForward();
					break;
				case 'right':
					moveBackward();
					break;					
			}
		});
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
		let className = 'tmtestSlider__slides';
		className += this.props.movingTransitionEnabled ? ' tmtestSlider__slidesMovingTransition' : '';
		className += this.props.moving !== 'nowhere' ? ' tmtestSlider__slides__move_' + this.props.moving : '';
		return <div ref={(slidesContainer)=>{
					this.slidesContainer = slidesContainer;
				}} className={className}> 	
					{slides}
				</div>;		
	}
}

function getSlidesChunkData(slideIndex, slides) {
	const prevSlideIndex = slideIndex <= 0 ? slides.length-1 : slideIndex - 1;
	const nextSlideIndex = slideIndex >= slides.length-1 ? 0 : slideIndex + 1;
	const slidesData = [
		Object.assign({},slides[prevSlideIndex]),
		Object.assign({},slides[slideIndex]),
		Object.assign({},slides[nextSlideIndex])
	];
	return slidesData;
}

function mapStateToProps (state, ownProps) {
	return {
		data: 						getSlidesChunkData(state.slides.slideIndex, ownProps.slides),
		movingTransitionEnabled: 	state.movingTransitionEnabled,
		moving: 					state.moving
	}
}

function mapDispatchToProps (dispatch) {
	return {
		moveForward: function() {
			dispatch(moveForward());
		},
		moveBackward: function() {
			dispatch(moveBackward());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Slides);