// action types
export const CHANGE_SLIDE = 'CHANGE_SLIDE';
export const MOVE_BACKWARD = 'MOVE_BACKWARD';
export const MOVE_FORWARD = 'MOVE_FORWARD';

// action creators
export function changeSlide (index) {
	return {
		type: 	CHANGE_SLIDE,
		index: 	index
	};
}
export function moveBackward () {
	return {
		type: 	MOVE_BACKWARD
	};
}
export function moveForward () {
	return {
		type: 	MOVE_FORWARD
	};
}