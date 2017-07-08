import {
	CHANGE_SLIDE,
	MOVE_BACKWARD,
	MOVE_FORWARD
} from '../actions/sliderActions';

export const initialState = {
	slideIndex: 0
}

export default function reducer (state = initialState,action) {
	switch (action){
		case CHANGE_SLIDE:
			state = Object.assign({},state,{
				slideIndex: action.index
			});
			break;
	}
	return state;
}