import React, {Component} from 'react';
import {connect} from 'react-redux';
import HousesFilter from '../containers/HousesFilter';
import HouseResidents from '../components/HouseResidents';
import {loadData} from '../actions/housesActions';


class Houses extends Component {
	componentWillMount(){
		this.props.loadData();
	}
	render() {
		const tableRows = this.props.data.map((houseData)=>{
			const {
				name,
				region,
				characters
			} = houseData;
			return 	<div key={name} className='tmTestHousesTable__row'>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnName'>
							<div className='tmTestHousesTable__houseName'>
								{name}
							</div>
						</div>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnRegion'>
							<div className='tmTestHousesTable__houseRegion'>
								{region}
							</div>
						</div>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnCharacters'>
							<HouseResidents house={name} characters={characters} />
						</div>
					</div>
		});
		return 	<div className='tmTestHousesTable'>
					<div className='tmTestHousesTable__row tmTestHousesTable__header'>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnName'>
							<div className='tmTestHousesTable__caption'>
								<HousesFilter field='name' caption='Name of the house' />
							</div>
						</div>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnRegion'>
							<div className='tmTestHousesTable__caption'>							
								<HousesFilter field='region' caption='Region' />
							</div>
						</div>
						<div className='tmTestHousesTable__column tmTestHousesTable__columnCharacters'>
							<div className='tmTestHousesTable__caption'>							
								Residents
							</div>
						</div>
					</div>
					{tableRows}
				</div>;		
	}
}

function mapStateToProps(state) {
	return {
		data: state.data
	}
}
function mapDispatchToProps(dispatch) {
	return {
		loadData: ()=>{
			dispatch(loadData());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Houses);