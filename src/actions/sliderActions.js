// action types
export const CHANGE_SLIDE = 'CHANGE_SLIDE';
export const ENABLE_MOVING_TRANSITION = 'ENABLE_MOVING_TRANSITION';
export const DISABLE_MOVING_TRANSITION = 'DISABLE_MOVING_TRANSITION';
export const ENABLE_MOVING = 'ENABLE_MOVING';
export const DISABLE_MOVING = 'DISABLE_MOVE_BACKWARD';

// action creators
export function changeSlide (offset) {
	return {
		type: 		CHANGE_SLIDE,
		offset: 	offset
	};
}
export function enableMovingTransition () {
	return {
		type: 	ENABLE_MOVING_TRANSITION
	};
}
export function disableMovingTransition () {
	return {
		type: 	DISABLE_MOVING_TRANSITION
	};
}
export function enableMoving (direction) {
	return {
		type: 		ENABLE_MOVING,
		direction: 	direction
	};
}
export function disableMoving () {
	return {
		type: 	DISABLE_MOVING
	};
}

// async action creators
export function moveForward () {
	return function (dispatch, getState) {
		const {moving} = getState();
		if ( moving === 'nowhere' ){
			dispatch(enableMovingTransition());
			dispatch(enableMoving('forward'));
			setTimeout(()=>{
				dispatch(disableMovingTransition());
				dispatch(disableMoving());
				dispatch(changeSlide(1));
			}, 500);			
		}
	}
}
export function moveBackward () {
	return function (dispatch, getState) {
		const {moving} = getState();
		if ( moving === 'nowhere' ){
			dispatch(enableMovingTransition());
			dispatch(enableMoving('backward'));
			setTimeout(()=>{
				dispatch(disableMovingTransition());
				dispatch(disableMoving());
				dispatch(changeSlide(-1));
			}, 500);			
		}
	}
}