import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchDrinks} from '../../actions/drinksActions'
import DrinkPanel from '../../components/DrinksPanel/DrinksPanel'

const withDrinksPanel = (foodFilter) => {

  class HOCComponent extends Component{
    componentDidMount() {
      this.props.fetchDrinks(foodFilter)
    }
    render(){
      return (
        <DrinkPanel drinks={this.props.drinks} loading={this.props.loading}/>
      )
    }
  }

  HOCComponent.propTypes ={
    drinks: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchDrinks: PropTypes.func.isRequired
  }

  const mapStateToProps = state => {
    return {
      drinks: state.drinks.drinks,
      loading: state.drinks.loading
    }
  }

  return connect(mapStateToProps,{fetchDrinks})(HOCComponent)

}

export default withDrinksPanel
