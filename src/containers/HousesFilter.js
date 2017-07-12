import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSortingField} from '../actions/housesActions';

class HousesFilter extends Component{
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		} 
	}
	componentDidMount() {
		this.filterEl.addEventListener('mouseenter', ()=>{
			this.setState(Object.assign({},this.state,{
				hover: true
			}));
		});
		this.filterEl.addEventListener('mouseleave', ()=>{
			this.setState(Object.assign({},this.state,{
				hover: false
			}));
		})
		this.filterEl.addEventListener('click', ()=>{
			this.props.enableSorting();
		})
	}
	getStateImgSrc() {
		let filterStateSuffix = '';
		if (this.state.hover) {
			filterStateSuffix = 'hover';
		}
		else if (this.props.active) {
			filterStateSuffix = 'active';
		}
		return '/assets/svg/icn-arrow' + (filterStateSuffix.length ? `-${filterStateSuffix}` : '') + '.svg';
	}
	render() {
		const {
			caption,
			active
		} = this.props;
		let className = 'tmTestHousesTable__filter',
			imgSrc = this.getStateImgSrc();
		className += active ? ' tmTestHousesTable__filter__active' : '';
		className += this.state.hover ? ' tmTestHousesTable__filter__hover' : '';
		return 	<div ref={(filterEl)=>{
					this.filterEl = filterEl;
				}} className={className}>
					<span>
						{caption}
					</span>
					<span>
						<img ref={(stateImg)=>{
							this.stateImg = stateImg;
						}} src={imgSrc} alt />
					</span>
				</div>
	}
}

function mapStateToProps(state, ownProps) {
	return {
		active: state.sortBy === ownProps.field
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		enableSorting: ()=>{
			dispatch(setSortingField(ownProps.field));
		}	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HousesFilter);