
// action types
export const SET_STAGE = 'SET_STAGE';

// action creators
export function setStage (scene) {
	const {
		top: offsetTop,
		bottom: offsetBottom
	} = scene.getBoundingClientRect();
	const screenHeight = window.innerHeight;
	let stage,
		relativeOffsetTop,
		relativeOffsetBottom,
		startPoint,
		endPoint,
		totalInterval,
		passedPart;
	if (offsetBottom<=0){
		stage = 1;
	}
	else if (offsetTop - screenHeight > 0){
		stage = 0;
	}
	else{

		// distance from top boundary of the document to top boundary of the element
		relativeOffsetTop = window.scrollY + offsetTop;

		// scroll position at which parallax should start
		startPoint = relativeOffsetTop <= screenHeight ? 0 : relativeOffsetTop - screenHeight;

		// distance from top boundary of the document to bottom boundary of the element
		relativeOffsetBottom = window.scrollY + offsetBottom;

		// scroll position at which parallax should stop
		endPoint = relativeOffsetBottom + screenHeight >= document.body.offsetHeight ? document.body.offsetHeight - screenHeight : relativeOffsetBottom;

		// the distance over which parallax occurs
		totalInterval = endPoint - startPoint;
		// console.log(totalInterval);

		// distance traveled at the moment
		passedPart = window.scrollY - startPoint;
		if ( passedPart >= 0 ) {
			stage = passedPart / totalInterval;
		}
	}
	return {
		type: 	SET_STAGE,
		stage: 	stage
	};	
}
