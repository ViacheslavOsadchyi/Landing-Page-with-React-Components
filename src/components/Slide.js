import React from 'react';

function Slide (props) {
	const commonSlideClassName = 'tmtestSlider__slide';
	const slideClassName = props.extraClass ? commonSlideClassName + ` tmtestSlider__slide--${props.extraClass}` : commonSlideClassName;
	return 	<div className={slideClassName}>
				<div className='tmtestSlider__slideMarkup'>
					<div className='tmtestSlider__slideImgHolder'>
						<img className='tmtestSlider__slideImg' src={props.img} alt />
					</div>
					<div className='tmtestSlider__slideText'>
						<h3 className='tmtestSlider__slideTitle'>{props.title}</h3>
						<p className='tmtestSlider__slideDesc'>{props.desc}</p>
					</div>
				</div>
			</div>
}

export default Slide;