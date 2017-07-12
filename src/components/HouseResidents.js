import React from 'react';

function HouseResidents (props){
	const charactersMarkup = props.characters.map((character,index)=>{
		return <li key={index} className='tmTestHousesTable__houseResident'>{character}</li>
	});
	return 	<ul className='tmTestHousesTable__houseResidents'>
				{charactersMarkup}
			</ul>	
}

export default HouseResidents;