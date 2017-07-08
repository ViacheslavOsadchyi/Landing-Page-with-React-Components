import React, {Component} from 'react';

class Slide extends Component {
	render() {
		const commonSlideClassName = 'tmtestSlider__slide';
		const slideClassName = this.props.extraClass ? commonSlideClassName + ` tmtestSlider__slide__${this.props.extraClass}` : commonSlideClassName;
		return 	<div className={slideClassName}>
					<div className='tmtestSlider__slideMarkup'>
						<div className='tmtestSlider__slideImgHolder'>
							<img className='tmtestSlider__slideImg' src={this.props.img} alt />
						</div>
						<div className='tmtestSlider__slideText'>
							<h3 className='tmtestSlider__slideTitle'>{this.props.title}</h3>
							<p className='tmtestSlider__slideDesc'>{this.props.desc}</p>
						</div>
					</div>
				</div>
	}
}

export default Slide;