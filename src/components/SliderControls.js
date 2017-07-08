import React, {Component} from 'react';

class SliderControls extends Component {
	componentDidMount () {
		this.controlBackward.addEventListener('mouseenter',()=>{
			this.controlBackwardImg.src = '/assets/svg/Left-Arrow-Hover.svg';
		},false);
		this.controlBackward.addEventListener('mouseleave',()=>{
			this.controlBackwardImg.src = '/assets/svg/Left-Arrow.svg';
		},false);
		this.controlForward.addEventListener('mouseenter',()=>{
			this.controlForwardImg.src = '/assets/svg/Right-Arrow-Hover.svg';
		},false);
		this.controlForward.addEventListener('mouseleave',()=>{
			this.controlForwardImg.src = '/assets/svg/Right-Arrow.svg';
		},false);
	}
	render () {
		const {
			moveForward,
			moveBackward
		} = this.props;
		return 	<div className="tmtestSlider__controls">
					<div className="tmtestSlider__control tmtestSlider__controlBackward" ref={(controlBackward)=>{
						this.controlBackward = controlBackward;
					}} onClick={()=> {
						moveBackward();
					}}>
						<img ref={(controlBackwardImg)=>{
							this.controlBackwardImg = controlBackwardImg;
						}} src="/assets/svg/Left-Arrow.svg" alt />
					</div>
					<div className="tmtestSlider__control tmtestSlider__controlForward" ref={(controlForward)=>{
						this.controlForward = controlForward;
					}} onClick={()=> {						
						moveForward();
					}}>
						<img ref={(controlForwardImg)=>{
							this.controlForwardImg = controlForwardImg;
						}} src="/assets/svg/Right-Arrow-withHover.svg" alt />						
					</div>
				</div>
	}
}

export default SliderControls;