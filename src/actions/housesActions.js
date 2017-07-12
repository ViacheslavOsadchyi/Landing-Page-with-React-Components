export const ADD_DATA = 'LOAD_DATA';
export const SET_SORTING_FIELD = 'SET_SORTING_FIELD';

function requestApi(url) {
	const promise = new Promise((resolve, reject)=>{
		let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
	});
	return promise;
}

function assembleData(houses, characters) {
	let data = [];
	houses.forEach((house)=>{
		data.push({
			name: house.name,
			region: house.region,
			characters: house.swornMembers.map((characterId)=>{
				return characters[characterId] !== undefined ? characters[characterId].name : '';
			})
		})
	})
	return data;
}

export function loadData() {
	return function(dispatch) {
		let houses = [],
			characterIds = [],
			characters = {},
			assembledData;
		requestApi('https://www.anapioficeandfire.com/api/houses').then(
			result => {
				let intervalCounter = 0, 
					interval;
				houses = JSON.parse(result);
				houses.forEach((house)=>{
					house.swornMembers.forEach((characterId)=>{
						if (characterIds.indexOf(characterId) === -1){
							characterIds.push(characterId);
							requestApi(characterId).then(
								result => {
									characters[characterId] = JSON.parse(result);
								}
							);
						};
					});
				});
				interval = setInterval(()=>{
					if (intervalCounter > 200) {
						clearInterval(interval);
					};
					if (Object.keys(characters).length === characterIds.length ){
						assembledData = assembleData(houses, characters);
						dispatch(addData(assembledData));
						clearInterval(interval);
					}
					intervalCounter++;
				}, 30);
			}
		);
	}
}

export function addData(data) {
	return {
		type: ADD_DATA,
		data: data
	}
}

export function setSortingField(field) {
	return {
		type: 	SET_SORTING_FIELD,
		field: 	field
	}
}