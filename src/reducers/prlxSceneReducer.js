import {combineReducers} from 'redux';

import {
	SET_STAGE
} from '../actions/prlxSceneActions';

export const initialState = {
	stage: 0
}

function reducer (state=initialState, action) {
	switch (action.type){
		case SET_STAGE:
			state = Object.assign({}, state, {
				stage: action.stage
			});
			break;
	}
	return state;
}

export default reducer;