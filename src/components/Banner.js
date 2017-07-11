import React from 'react';
import PrlxSceneApp from '../containers/PrlxSceneApp';
import PrlxLayer from '../containers/PrlxLayer';

function Banner(props) {
	const {
		title,
		description
	} = props;
	return 	<div className='tmtestBanner'>
				<div className='tmtestBanner__prlxScene'>
					<div className='tmtestBanner__prlxSceneContainer'>
						<PrlxSceneApp>
							<PrlxLayer name='lines' src='/assets/svg/Illustration-3@3x.svg' endPoint='70' />
							<PrlxLayer name='box' src='/assets/svg/Illustration-2.svg' endPoint='22' />
							<PrlxLayer name='heart' src='/assets/svg/Illustration-1.svg' endPoint='-122' />					
						</PrlxSceneApp>
					</div>
				</div>
				<div className="tmtestBanner__content">
					<h3 dangerouslySetInnerHTML={{__html: title}} className='tmtestBanner__title' />
					<p className='tmtestBanner__description'>
						{description}
					</p>
				</div>
			</div>;
}

export default Banner;