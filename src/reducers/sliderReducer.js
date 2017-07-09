import {combineReducers} from 'redux';

import {
	CHANGE_SLIDE,
	ENABLE_MOVING_TRANSITION,
	DISABLE_MOVING_TRANSITION,
	ENABLE_MOVING,
	DISABLE_MOVING
} from '../actions/sliderActions';

export const initialState = {

	// lastSlideIndex will be added to slides object in constructor
	slides: {
		slideIndex: 0
	},
	movingTransitionEnabled:  	false,
	moving: 					'nowhere'
}


function slides (state = {slideIndex: 0}, action) {
	const {
		slideIndex,
		lastSlideIndex
	} = state;
	let offseted,
		newSlideIndex,
		diff;
	switch (action.type){
		case CHANGE_SLIDE:
			offseted = slideIndex + action.offset;
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
			state = Object.assign({},state,{
				slideIndex: newSlideIndex
			});
			break;
	}
	return state;	
}

function movingTransitionEnabled (state = false, action) {
	switch (action.type){
		case ENABLE_MOVING_TRANSITION:
			state = true
			break;
		case DISABLE_MOVING_TRANSITION:
			state = false
			break;
	}
	return state;
}

function moving (state = 'nowhere', action) {
	switch (action.type) {
		case ENABLE_MOVING:
			state = action.direction
			break;
		case DISABLE_MOVING:
			state = 'nowhere'
			break;
	}
	return state;	
}

const rootReducer = combineReducers({
	slides,
	movingTransitionEnabled,
	moving
});

export default rootReducer;