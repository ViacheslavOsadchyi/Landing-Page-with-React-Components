import React, {Component} from 'react';
import Slides from '../components/Slides';
import SliderControls from '../components/SliderControls';
import SliderStyles from '../css/Slider.css';

class Slider extends Component {
	constructor (props) {
		super(props);
		this.moved = false;
		this.state = {
			slideIndex: 0
		}
	}
	changeSlide (offset) {
		let offseted,
			lastSlideIndex,
			newSlideIndex,
			diff;
		offseted = this.state.slideIndex + offset;
		lastSlideIndex = this.props.slides.length - 1;
		if (offseted<0){
			newSlideIndex = lastSlideIndex + (offseted + 1);
		}
		else{
			const diff = offseted - lastSlideIndex;
			if (diff>0){
				newSlideIndex = diff-1;
			}
			else{
				newSlideIndex = offseted;
			}
		}
		this.setState(Object.assign({},this.state,{
			slideIndex: newSlideIndex
		}),()=>{
			this.moved = false;
		});
	}
	moveBackward () {
		if ( !this.moved ){
			this.moved = true;
			this.slidesComponent.enableMovingTransition();
			this.slidesComponent.enableMoveBackward();
			setTimeout(()=>{
				this.slidesComponent.disableMovingTransition();
				this.slidesComponent.disableMoveBackward();
				this.changeSlide(-1);
			}, 500);
		}
	}
	moveForward () {
		if ( !this.moved ){
			this.moved = true;
			this.slidesComponent.enableMovingTransition();
			this.slidesComponent.enableMoveForward();
			setTimeout(()=>{
				this.slidesComponent.disableMovingTransition();
				this.slidesComponent.disableMoveForward();
				this.changeSlide(1);
			}, 500);
		}
	}
	prepareSlidesChunkData() {
		const currSlideIndex = this.state.slideIndex;
		const prevSlideIndex = currSlideIndex <= 0 ? this.props.slides.length-1 : currSlideIndex - 1;
		const nextSlideIndex = currSlideIndex >= this.props.slides.length-1 ? 0 : currSlideIndex + 1;
		const slidesData = [
			Object.assign({},this.props.slides[prevSlideIndex]),
			Object.assign({},this.props.slides[currSlideIndex]),
			Object.assign({},this.props.slides[nextSlideIndex])
		];
		return slidesData;
	}
	render() {
		const slidesData = this.prepareSlidesChunkData();
		return 	<div className="tmtestSlider">
					<Slides ref={(slidesComponent)=>{
						this.slidesComponent = slidesComponent;
					}} data={slidesData} />
					<SliderControls moveForward={this.moveForward.bind(this)} moveBackward={this.moveBackward.bind(this)} />
				</div>;
	}
}

export default Slider;