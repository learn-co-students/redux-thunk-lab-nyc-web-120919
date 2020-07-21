import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   



componentDidMount(){
  this.props.fetchCats()
}

handleLoading = () => {
  if(this.props.loading){
    return <div>Loading...</div>
  } else {
    return <CatList catPics={this.props.catPics}/>
  }
}
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const msp = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mdp = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}


export default connect(msp, mdp)(App)

