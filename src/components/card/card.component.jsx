import { Component } from 'react';
import './card.styles.css'

class Card extends Component {

  render () {
    const { id, name, email } = this.props.monster;
    
    return (
      <div className='card-container'>
        <div key={id} >
          <img alt={`monster: ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180
          `}></img>
          <h2>{name}</h2>
          <h2>{email}</h2>
        </div>
      </div>
    )
  }
}

export default Card;