import {
	ADD_DATA,
	SET_SORTING_FIELD
} from '../actions/housesActions';

export const initialState = {
	data: [],
	sortBy: null
};

function reducer(state = initialState, action) {
	switch (action.type){
		case ADD_DATA:
			return Object.assign({},state,{
				data: action.data
			});
			break;
		case SET_SORTING_FIELD:
			return Object.assign({},state,{
				data: state.data.sort((a,b)=>{
					return a[action.field].localeCompare(b[action.field]);
				}).slice(),
				sortBy: action.field
			});
			break;
	}
	return state;
}

export default reducer;