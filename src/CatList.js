// write your CatList component here
import React from 'react'

export default class CatList extends React.Component {

    createCatList = () => {
        // console.log(this.props)
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }
    
    render() {
      return (
        <div>
          {this.createCatList()}
        </div>
      )
    }
}